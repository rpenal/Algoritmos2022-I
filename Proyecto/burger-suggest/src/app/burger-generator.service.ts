import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, EMPTY, merge, BehaviorSubject} from 'rxjs';

import {FILENAMES, BREADS, MEATS} from './burger-gen';

@Injectable({
  providedIn: 'root'
})
export class BurgerGeneratorService {
  readonly FILENAMES: string[] = FILENAMES;
  INGREDIENTS: any = {};
  SIMILARITIES: any = {};
  PHOTOS: any = {};

  BREADS: string[] = BREADS;
  MEATS: string[] = MEATS;
  EXTRAS: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  readonly DATADIR: string = 'assets/data/';

  private getIngredient(file: string): Observable<any> {
    return this.http.get(this.DATADIR + file);
  }

  constructor(private http: HttpClient) {
    const obs = this.initIngList();
    obs.subscribe((ingredient: any) => {
      let name = ingredient.entity_alias_readable;
      this.PHOTOS[name] = ingredient.photo;
      this.INGREDIENTS[name] = [];
      for (const compound of ingredient.molecules) {
        this.INGREDIENTS[name].push(compound.common_name);
      }
      if (Object.keys(this.INGREDIENTS).length == FILENAMES.length) {
        this.initSimList();
      }
    });
  }

  intersection(lst1: string[], lst2: string[]): string[] {
    return lst1.filter((ing: string) => lst2.includes(ing));
  }

  initIngList(): Observable<any> {
    var obs: Observable<any> = EMPTY;
    for (const file of FILENAMES) {
      obs = merge(obs, this.getIngredient(file));
    }
    return obs;
  }

  initSimList(): void {
    let extras = Object.keys(this.INGREDIENTS).filter((ing: string) => !(this.BREADS.includes(ing) || this.MEATS.includes(ing)));
    this.EXTRAS.next(extras);
    for (const bread of this.BREADS) {
      this.SIMILARITIES[bread] = {};
      for (const meat of this.MEATS) {
        let intersect: string[] = this.intersection(this.INGREDIENTS[bread], this.INGREDIENTS[meat]);
        let simil: number = intersect.length / Math.max(this.INGREDIENTS[bread].length, this.INGREDIENTS[meat].length);
        this.SIMILARITIES[bread][meat] = simil;
      }
    }
    for (const meat of this.MEATS) {
      this.SIMILARITIES[meat] = {};
      for (const ext of extras) {
        let intersect: string[] = this.intersection(this.INGREDIENTS[meat], this.INGREDIENTS[ext])
        let simil: number = intersect.length / Math.max(this.INGREDIENTS[meat].length, this.INGREDIENTS[ext].length);
        this.SIMILARITIES[meat][ext] = simil;
      }
    }
    for (const princ of extras) {
      this.SIMILARITIES[princ] = {};
      for (const pair of extras.concat(this.MEATS.concat(this.BREADS))) {
        if (princ != pair) {
          if (Object.keys(this.SIMILARITIES).includes(pair)) {
            if (Object.keys(this.SIMILARITIES[pair]).includes(princ)) {
              this.SIMILARITIES[princ][pair] = this.SIMILARITIES[pair][princ];
              continue;
            }
            let intersect: string[] = this.intersection(this.INGREDIENTS[princ], this.INGREDIENTS[pair])
            let simil: number = intersect.length / Math.max(this.INGREDIENTS[princ].length, this.INGREDIENTS[pair].length);
            this.SIMILARITIES[princ][pair] = simil;
          }
        }
      }
    }
  }

  simCalc(burger: string[]): number {
    let simTotal: number = 0;
    if (burger.length > 0) {
      let consideredIngs: string[] = [];
      for (const ing of burger) {
        for (const jng of burger) {
          if (ing != jng && !consideredIngs.includes(jng)) {
            if ((this.MEATS.includes(ing) && this.MEATS.includes(jng)) || (this.BREADS.includes(ing) && this.BREADS.includes(jng))) {
              continue;
            }
            let sim: number = 0;
            if (ing in this.SIMILARITIES[jng]) {
              sim = this.SIMILARITIES[jng][ing];
            } else if (jng in this.SIMILARITIES[ing]) {
              sim = this.SIMILARITIES[ing][jng];
            }
            simTotal += sim;
          }
        }
        consideredIngs.push(ing);
      }
    }
    return simTotal;
  }

  addIngredient(ingList: string[], possibleIngs: string[], dissonant: boolean = true): [string[], string[]] {
    let simTotal: number = 0;
    let possibleIng: string = "";
    if (dissonant) {
      simTotal = Number.MAX_SAFE_INTEGER;
      for (const ing of possibleIngs) {
        let possibleIngList: string[] = [...ingList];
        let possibleSimTotal: number = 0;
        possibleIngList.push(ing);
        possibleSimTotal = this.simCalc(possibleIngList);
        if (possibleSimTotal < simTotal) {
          simTotal = possibleSimTotal;
          possibleIng = ing;
        }
      }
    } else {
      simTotal = Number.MIN_SAFE_INTEGER;
      for (const ing of possibleIngs) {
        let possibleIngList: string[] = [...ingList];
        let possibleSimTotal: number = 0;
        possibleIngList.push(ing);
        possibleSimTotal = this.simCalc(possibleIngList);
        if (possibleSimTotal > simTotal) {
          simTotal = possibleSimTotal;
          possibleIng = ing;
        }
      }
    }

    ingList.push(possibleIng);
    possibleIngs = possibleIngs.filter((x: string) => x != possibleIng);

    return [ingList, possibleIngs];
  }

  generateBurger(ingAmount: number, ingList: string[], dissonant: boolean = true): string[] {
    let possibleIngs: string[] = Object.keys(this.INGREDIENTS);
    let usedBreads: string[] = this.intersection(ingList, this.BREADS);
    let usedMeats: string[] = this.intersection(ingList, this.MEATS);
    possibleIngs = possibleIngs.filter((x: string) => !ingList.includes(x));
    if (usedBreads.length != 0) {
      ingList = ingList.filter((x: string) => !this.BREADS.includes(x));
      ingList.push(usedBreads[0]);
    } else {
      let breads = [...this.BREADS];
      ingList = this.addIngredient(ingList, breads, dissonant)[0];
    }
    possibleIngs = possibleIngs.filter((x: string) => !this.BREADS.includes(x));
    if (usedMeats.length != 0) {
      ingList = ingList.filter((x: string) => !this.MEATS.includes(x));
      ingList.push(usedMeats[0]);
    } else {
      let meats = [...this.MEATS];
      ingList = this.addIngredient(ingList, meats, dissonant)[0];
    }
    possibleIngs = possibleIngs.filter((x: string) => !this.MEATS.includes(x));
    while (ingList.length < ingAmount) {
      if (possibleIngs.length == 0) {
        break;
      }
      let ingTuple: [string[], string[]] = this.addIngredient(ingList, possibleIngs, dissonant);
      ingList = ingTuple[0];
      possibleIngs = ingTuple[1];
    }
    return ingList;
  }
}

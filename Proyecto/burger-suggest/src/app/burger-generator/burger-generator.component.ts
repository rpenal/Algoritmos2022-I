import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { BurgerGeneratorService } from '../burger-generator.service';

@Component({
  selector: 'app-burger-generator',
  templateUrl: './burger-generator.component.html',
  styleUrls: ['./burger-generator.component.css'],
})
export class BurgerGeneratorComponent implements OnInit {
  readonly BREADS: string[] = this.burgen.BREADS;
  readonly MEATS: string[] = this.burgen.MEATS;
  readonly EXTRAS: Observable<string[]> = this.burgen.EXTRAS;
  readonly PHOTOS: any = this.burgen.PHOTOS;

  ingAmount: number = 0;
  dissonant: boolean = false;
  burger: string[] = [];

  selectedBread: string = '';
  selectedMeat: string = '';
  selectedExtras: string[] = [];

  constructor(private burgen: BurgerGeneratorService) {
    console.log(this.BREADS);
    console.log(this.MEATS);
    this.EXTRAS.subscribe(e => console.log(e));
  }

  ngOnInit(): void {}

  selectBread(bread: string): void {
    this.selectedBread = this.selectedBread == bread ? '' : bread;
  }

  selectMeat(meat: string): void {
    this.selectedMeat = this.selectedMeat == meat ? '' : meat;
  }

  selectExtra(extra: string): void {
    if (this.selectedExtras.includes(extra)) {
      this.selectedExtras = this.selectedExtras.filter(
        (x: string) => x != extra
      );
    } else {
      if (!extra) {
        this.selectedExtras.length = 0;
        return;
      }
      this.selectedExtras.push(extra);
    }
    console.log(this.selectedExtras.length);
  }

  getIngList(): string[] {
    let ingList: string[] = this.selectedExtras
      .concat([this.selectedMeat].concat([this.selectedBread]))
      .filter((x: string) => x);
    return ingList;
  }

  setBurger(): void {
    let ingList: string[] = this.getIngList();
    let hasBread: number = this.selectedBread ? 0 : 1;
    let hasMeat: number = this.selectedMeat ? 0 : 1;
    let offset = hasBread + hasMeat;
    this.burger = this.burgen.generateBurger(
      ingList.length + this.ingAmount + offset,
      ingList
    );
  }
}

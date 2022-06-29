import { Component, OnInit } from '@angular/core';
import { BurgerGeneratorService } from '../burger-generator.service';

@Component({
  selector: 'app-burger-generator',
  templateUrl: './burger-generator.component.html',
  styleUrls: ['./burger-generator.component.css'],
})
export class BurgerGeneratorComponent implements OnInit {
  readonly BREADS: string[] = this.burgen.BREADS;
  readonly MEATS: string[] = this.burgen.MEATS;
  readonly EXTRAS: string[] = this.burgen.EXTRAS;
  readonly PHOTOS: any = this.burgen.PHOTOS;

  ingAmount: number = 0;
  burger: string[] = [];

  selectedBread: string = '';
  selectedMeat: string = '';
  selectedExtras: string[] = [];

  constructor(private burgen: BurgerGeneratorService) {
    console.log(this.BREADS);
    console.log(this.MEATS);
    console.log(this.EXTRAS);
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
      this.selectedExtras.push(extra);
    }
  }

  getIngList(): string[] {
    let ingList: string[] = this.selectedExtras
      .concat([this.selectedMeat].concat([this.selectedBread]))
      .filter((x: string) => x);
    return ingList;
  }

  setBurger(): void {
    let ingList: string[] = this.getIngList();
    this.burger = this.burgen.generateBurger(
      ingList.length + this.ingAmount,
      ingList
    );
  }
}

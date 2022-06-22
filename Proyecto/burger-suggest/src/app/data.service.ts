import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private bread: string = "";
  private meat: string = "";
  private extras: string[] = [];

  constructor() { }

  setBread(bread: string): void {
    this.bread = bread;
  }
  getBread(): string {
    return this.bread;
  }
  setMeat(meat: string): void {
    this.meat = meat;
  }
  getMeat(): string {
    return this.meat;
  }
  setExtras(extras: string[]): void {
    this.extras = extras;
  }
  getExtras(): string[] {
    return this.extras;
  }
  getIngredients(): string[] {
    return this.extras.concat([this.bread].concat([this.meat]));
  }
}

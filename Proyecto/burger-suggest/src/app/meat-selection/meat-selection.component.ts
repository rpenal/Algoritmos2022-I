import { Component, OnInit } from '@angular/core';
import {BurgerGeneratorService} from '../burger-generator.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-meat-selection',
  templateUrl: './meat-selection.component.html',
  styleUrls: ['./meat-selection.component.css']
})
export class MeatSelectionComponent implements OnInit {

  MEATS: string[] = this.burgen.MEATS;

  constructor(private burgen: BurgerGeneratorService, private data: DataService) { }

  ngOnInit(): void {
  }

  selectMeat(meat: string): void {
    this.data.setMeat(meat);
  }

  checkBread(): void {
    console.log('Bread from meat: ' + this.data.getBread());
  }

}

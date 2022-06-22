import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

import { BurgerGeneratorService } from '../burger-generator.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bread-selection',
  templateUrl: './bread-selection.component.html',
  styleUrls: ['./bread-selection.component.css']
})
export class BreadSelectionComponent implements OnInit {
  BREADS: string[] = this.burgen.BREADS;

  constructor(private burgen: BurgerGeneratorService, private data: DataService, private location: Location) {
    console.log(this.BREADS);
  }

  selectBread(bread: string): void {
    console.log(bread);
    this.data.setBread(bread);
    console.log('Bread from data: ' + this.data.getBread());
    this.location.go('meat');
  }

  ngOnInit(): void {
  }

}

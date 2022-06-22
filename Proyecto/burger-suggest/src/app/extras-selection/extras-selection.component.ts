import {Component, OnInit} from '@angular/core';
import {BurgerGeneratorService} from '../burger-generator.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-extras-selection',
  templateUrl: './extras-selection.component.html',
  styleUrls: ['./extras-selection.component.css']
})
export class ExtrasSelectionComponent implements OnInit {
  EXTRAS: string[] = this.burgen.EXTRAS;
  selectedExtras: any = {};

  constructor(private burgen: BurgerGeneratorService, private data: DataService) {}

  ngOnInit(): void {
  }

  selectExtras(): void {
    let extras = Object.keys(this.selectedExtras).filter((x: string) => this.selectedExtras[x]);
    this.data.setExtras(extras);
  }

  printExtras(): void {
    console.log(this.selectedExtras);
  }

}

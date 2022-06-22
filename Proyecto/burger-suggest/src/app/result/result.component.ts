import { Component, OnInit } from '@angular/core';
import {BurgerGeneratorService} from '../burger-generator.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  ingredients: string[] = this.data.getIngredients();
  burger: string[] = this.burgen.generateBurger(7, this.ingredients);

  constructor(private burgen: BurgerGeneratorService, private data: DataService) { }

  ngOnInit(): void {
  }

}

import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {BurgerGeneratorService} from './burger-generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'burger-match';

  constructor(private burgen: BurgerGeneratorService, private location: Location) {};

  goBack(): void {
    this.location.back();
  }
  ngOnInit() {}
}

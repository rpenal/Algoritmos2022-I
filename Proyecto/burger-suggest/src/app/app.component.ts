import {Component, OnInit} from '@angular/core';
import {BurgerGeneratorService} from './burger-generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'burger-match';

  constructor(burgen: BurgerGeneratorService) {};

  ngOnInit() {}
}

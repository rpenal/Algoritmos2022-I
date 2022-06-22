import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {WelcomeComponent} from './welcome/welcome.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatChipsModule} from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';

import {BreadSelectionComponent} from './bread-selection/bread-selection.component';
import {MeatSelectionComponent} from './meat-selection/meat-selection.component';
import {ExtrasSelectionComponent} from './extras-selection/extras-selection.component';
import {ResultComponent} from './result/result.component';
import { BurgerGeneratorComponent } from './burger-generator/burger-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BreadSelectionComponent,
    MeatSelectionComponent,
    ExtrasSelectionComponent,
    ResultComponent,
    BurgerGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatChipsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

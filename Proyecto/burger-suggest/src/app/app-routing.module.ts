import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BreadSelectionComponent} from './bread-selection/bread-selection.component';
import {BurgerGeneratorComponent} from './burger-generator/burger-generator.component';
import {ExtrasSelectionComponent} from './extras-selection/extras-selection.component';
import {MeatSelectionComponent} from './meat-selection/meat-selection.component';
import {ResultComponent} from './result/result.component';
import {WelcomeComponent} from './welcome/welcome.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'bread', component: BreadSelectionComponent},
  {path: 'meat', component: MeatSelectionComponent},
  {path: 'extras', component: ExtrasSelectionComponent},
  {path: 'result', component: ResultComponent},
  {path: 'burger', component: BurgerGeneratorComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

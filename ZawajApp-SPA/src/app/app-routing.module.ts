import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndividualsComponent } from './Components/UnitedNation/Individuals/Individuals.component';
import { EntitesComponent } from './Components/UnitedNation/Entities/Entites/Entites.component';


const routes: Routes = [
  { path: 'individuals', component: IndividualsComponent },
  { path: 'Entitites', component: EntitesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

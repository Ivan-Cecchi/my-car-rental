import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudiComponent } from './car-components/audi/audi.component';
import { FiatComponent } from './car-components/fiat/fiat.component';
import { HomeComponent } from './car-components/home/home.component';
import { FordComponent } from './car-components/ford/ford.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'fiat',
    component: FiatComponent,
  },
  {
    path: 'ford',
    component: FordComponent,
  },

  {
    path: 'audi',
    component: AudiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

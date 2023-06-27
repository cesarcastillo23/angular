import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPageComponent } from './page/basics-page/basics-page.component';
import { NumbersPageComponent } from './page/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './page/uncommon-page/uncommon-page.component';
import { OrderComponent } from './page/order/order.component';

const routes: Routes = [
  {
    path:'',
    component:BasicsPageComponent
  },
  {
    path:'numbers',
    component:NumbersPageComponent
  },
  {
    path:'uncommon',
    component:UncommonPageComponent
  },
  {
    path:'custom',
    component:OrderComponent
  },
  {
    path:'**',
    component:BasicsPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './page/product/product.component';
import { PriceComponent } from './components/price/price.component';


@NgModule({
  declarations: [
    ProductComponent,
    PriceComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }

import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/couter/counter.component";



@NgModule({
  declarations:[
    CounterComponent
  ],
  exports:[
    CounterComponent
  ]
})
export class CounterModule{

}

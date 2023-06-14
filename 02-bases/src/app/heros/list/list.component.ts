import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  heroNames:string[]=['Spiderman','Iroman','Hulk','Thor'];
  deleteHero?:string;

  removeLastHero():void{
    this.deleteHero=this.heroNames.pop()
  }
}

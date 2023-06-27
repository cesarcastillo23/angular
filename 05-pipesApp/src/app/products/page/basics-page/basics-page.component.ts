import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {


  public nameLower:string='cesar'
  public nameUpper:string='CESAR'
  public fullName:string='CEsaR CaStillO'

  public customDate:Date = new Date();


}

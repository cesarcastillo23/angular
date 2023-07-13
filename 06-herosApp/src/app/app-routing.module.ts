import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/page/error404-page/error404-page.component';
import {  ActivateGuard, MatchGuard } from './auth/guards/auth.guard';
import { publicActivateGuard } from './auth/guards/public-guard.guard';


const routes: Routes = [
  {
    path:'auth',
    loadChildren:()=> import ('./auth/auth.module').then(m=> m.AuthModule),
    canActivate:[publicActivateGuard],
    //canMatch:[PublicMatchGuard]
  },
  {
    path:'heroes',
    loadChildren:()=> import ('./heroes/heroes.module').then(m=> m.HeroesModule),
     canActivate:[ActivateGuard],
    // canMatch:[MatchGuard]
  },
  {
    path:'404',
    component:Error404PageComponent,
  },
  {
    path:'',
    redirectTo:'heroes',
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'404',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

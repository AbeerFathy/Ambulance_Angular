import { Component, NgModule } from '@angular/core';
import { RedirectCommand, RouterModule, Routes } from '@angular/router';
import path from 'node:path';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { FirsrAiaCComponent } from './firsr-aia-c/firsr-aia-c.component';
import { FirstARegisterComponent } from './first-aregister/first-aregister.component';
import { SecendARegisterComponent } from './secend-aregister/secend-aregister.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:"" ,  redirectTo : "home" , pathMatch:"full"},
  {path:"home" , component:HomeComponent},
  {path:"about" , component:AboutComponent},
 

  {path:"first-aia-c" , component:FirsrAiaCComponent},
  {path:"first-aregister" , component:FirstARegisterComponent},
  {path:"secend-aregister" , component:SecendARegisterComponent},
  {path:"navbar" , component:NavbarComponent},
  {path:"**" , component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

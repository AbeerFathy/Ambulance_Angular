import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FirsrAiaCComponent } from './firsr-aia-c/firsr-aia-c.component';
import { FirstARegisterComponent } from './first-aregister/first-aregister.component';
import { SecendARegisterComponent } from './secend-aregister/secend-aregister.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    
    AppComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    NavbarComponent,
    FirsrAiaCComponent,
    FirstARegisterComponent,
    SecendARegisterComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

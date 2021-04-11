import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from "@angular/forms";
import { FilterPipe } from './filter.pipe';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    SplashScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

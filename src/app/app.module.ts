import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroeMudele } from './heroes/heroe.module';
import { ContadorComponent } from './Contador/contador/contador.component';
import { ContadorModule } from './Contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
     ],
  imports: [
    BrowserModule,
    HeroeMudele,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

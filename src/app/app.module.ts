import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './Contador/contador.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from "./heroes/listado/ListadoComponent";
import { HeroeMudele } from './heroes/heroe.module';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
  ],
  imports: [
    BrowserModule,
    HeroeMudele
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

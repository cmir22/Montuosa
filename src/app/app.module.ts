import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginasWebPageComponent } from './components/paginas-web-page/paginas-web-page.component';
import { LogotiposPageComponent } from './components/logotipos-page/logotipos-page.component';
import { CreatumarcaPageComponent } from './components/creatumarca-page/creatumarca-page.component';
import { PortafolioPageComponent } from './components/portafolio-page/portafolio-page.component';
import { QuienesomosPageComponent } from './components/quienesomos-page/quienesomos-page.component';
import { ServiciosPageComponent } from './components/servicios-page/servicios-page.component';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginasWebPageComponent,
    LogotiposPageComponent,
    CreatumarcaPageComponent,
    PortafolioPageComponent,
    QuienesomosPageComponent,
    ServiciosPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

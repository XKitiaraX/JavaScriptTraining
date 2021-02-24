import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {SharedModule} from "./shared/shared.module";
import {AppRouterModule} from "./app-router.module";
import {VentasModule} from "./ventas/ventas.module";

import localEs from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-HN'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

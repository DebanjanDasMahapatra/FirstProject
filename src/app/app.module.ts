/// <reference path="../../node_modules/bingmaps/types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisitorService } from './visitor.service';
import { MapModule, MapAPILoader, BingMapServiceFactory, BingMapAPILoaderConfig, BingMapAPILoader, WindowRef, DocumentRef } from 'angular-maps';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MapModule.forRoot()
  ],
  providers: [VisitorService,{
    provide: MapAPILoader, deps: [], useFactory: MapServiceProviderFactory
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function MapServiceProviderFactory(){
  let bc: BingMapAPILoaderConfig = new BingMapAPILoaderConfig();
  bc.apiKey = "Ah_EWsdJvmGH3mB44xljZu9ShHEl6Aym7WR5xlaHMNiZsaraYQfjaBBtX8Sdar5E"; // your bing map key
  bc.branch = "experimental"; 
      // to use the experimental bing brach. There are some bug fixes for
      // clustering in that branch you will need if you want to use 
      // clustering.
  return new BingMapAPILoader(bc, new WindowRef(), new DocumentRef());
}
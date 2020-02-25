import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from "./app-routing.module";

import { AppHeaderComponent } from './app-header/app-header.component';
import { GalleryCardComponent } from './gallery-card/gallery-card.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AppHeaderComponent,
    GalleryCardComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

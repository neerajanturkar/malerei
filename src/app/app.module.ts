import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { AppHeaderComponent } from './app-header/app-header.component';
import { GalleryCardComponent } from './gallery-card/gallery-card.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { CreatePaintingComponent } from './create-painting/create-painting.component';
import { GalleryService } from './gallery.service'
import { FormsModule } from '@angular/forms'; 
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from 'selenium-webdriver/http';

// import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AppHeaderComponent,
    GalleryCardComponent,
    AppFooterComponent,
  
    
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NavbarComponent } from './navbar/navbar.component';
import { EventComponent } from './event/event.component';
import { CreateEventComponent } from './event/create-event/create-event.component';
import { ShowEventsComponent } from './event/show-events/show-events.component';
import { UpdateEventComponent } from './event/update-event/update-event.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from "@angular/forms";

import {MatDialogModule} from '@angular/material/dialog';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatNativeDateModule,
  MatDatepickerModule
} from "@angular/material";



import { AppHeaderComponent } from './app-header/app-header.component';
import { GalleryCardComponent } from './gallery-card/gallery-card.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { CreatePaintingComponent } from './create-painting/create-painting.component';
import { GalleryService } from './gallery.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from 'selenium-webdriver/http';

// import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent,
    EventComponent,
    CreateEventComponent,
    ShowEventsComponent,
    UpdateEventComponent,
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
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

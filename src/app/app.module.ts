import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { NavbarComponent } from './navbar/navbar.component';
import { EventComponent } from './event/event.component';
import { CreateEventComponent } from './event/create-event/create-event.component';
import { ShowEventsComponent } from './event/show-events/show-events.component';
import { UpdateEventComponent } from './event/update-event/update-event.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
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


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent,
    EventComponent,
    CreateEventComponent,
    ShowEventsComponent,
    UpdateEventComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

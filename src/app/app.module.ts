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
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {MatDialogModule} from '@angular/material/dialog';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatSnackBarModule,
  MatSelectModule
} from "@angular/material";



import { AppHeaderComponent } from './app-header/app-header.component';
import { GalleryCardComponent } from './gallery-card/gallery-card.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { CreatePaintingComponent } from './create-painting/create-painting.component';
import { DetailEventComponent } from './event/detail-event/detail-event.component';
import { RegisterComponent } from './register/register.component';
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
    DetailEventComponent,
    RegisterComponent
    
  
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
    MatTableModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSelectModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    FormsModule,
    RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RegisterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

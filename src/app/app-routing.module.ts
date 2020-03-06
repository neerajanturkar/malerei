import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ShowEventsComponent } from './event/show-events/show-events.component';
import { CreateEventComponent } from './event/create-event/create-event.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CreatePaintingComponent } from './create-painting/create-painting.component';
import { ViewPaintingComponent } from './view-painting/view-painting.component';
import { DetailEventComponent } from './event/detail-event/detail-event.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: '', component: HomeComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'gallery', component: GalleryComponent},
    { path: 'display-event', component: ShowEventsComponent},
    { path: 'create-event', component: CreateEventComponent},
    { path: 'event-details/:id', component: DetailEventComponent},
    { path: 'create-painting', component: CreatePaintingComponent},
    { path: 'view-painting/:id', component: ViewPaintingComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule],
  declarations: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  GalleryComponent,
  CreatePaintingComponent,
  ViewPaintingComponent
];

import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ShowEventsComponent } from './event/show-events/show-events.component';
import { CreateEventComponent } from './event/create-event/create-event.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CreatePaintingComponent } from './create-painting/create-painting.component';
import { ViewPaintingComponent } from './view-painting/view-painting.component';
const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: '', component: HomeComponent},
    { path: 'event', component: ShowEventsComponent},
    { path: 'create-event', component: CreateEventComponent},
    { path: 'home', component: HomeComponent},
    { path: 'gallery', component: GalleryComponent},
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

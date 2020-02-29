import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CreatePaintingComponent } from './create-painting/create-painting.component';
import { ViewPaintingComponent } from './view-painting/view-painting.component';
const routes: Routes = [

  
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'createPainting', component: CreatePaintingComponent},
  { path: 'viewPainting', component: ViewPaintingComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule],
  declarations: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  GalleryComponent,
  CreatePaintingComponent,
  ViewPaintingComponent
];

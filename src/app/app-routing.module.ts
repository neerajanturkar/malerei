import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ShowEventsComponent } from './event/show-events/show-events.component';
import { CreateEventComponent } from './event/create-event/create-event.component';
const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'display-event', component: ShowEventsComponent},
    { path: 'create-event', component: CreateEventComponent}

 
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
  HomeComponent
];

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MasonryModule } from 'angular2-masonry';

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import './rxjs-operators';
import { DogsComponent } from './dogs/dogs.component';
import { GirlsComponent } from './girls/girls.component';
import { BoysComponent } from './boys/boys.component';

// Pipes
import { GenderPipe } from './dogs/gender-pipe';

const routeComponents = appRoutes.map(a => a.component);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ...routeComponents,
    DogsComponent,
    GirlsComponent,
    BoysComponent,
    GenderPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MasonryModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

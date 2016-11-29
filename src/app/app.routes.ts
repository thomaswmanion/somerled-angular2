import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BoysComponent } from './boys/boys.component';
import { GirlsComponent } from './girls/girls.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'boys', component: BoysComponent },
    { path: 'girls', component: GirlsComponent },
];

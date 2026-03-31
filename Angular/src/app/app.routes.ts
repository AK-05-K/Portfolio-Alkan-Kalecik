import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { AboutMe } from './about-me/about-me';

export const routes: Routes = [
    { path: '', component: Homepage}, /* Mit '' wird die component Homepage als Startpunkt festgelegt */
    { path: 'about-me', component: AboutMe }
];

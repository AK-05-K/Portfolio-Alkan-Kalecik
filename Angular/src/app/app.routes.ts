import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { AboutMe } from './about-me/about-me';
import { Projects } from './projects/projects';

export const routes: Routes = [
    { path: '', component: Homepage}, /* Mit '' wird die component Homepage als Startpunkt festgelegt */
    { path: 'about-me', component: AboutMe },
    { path: 'projects', component: Projects}
];

import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { LearnLifeCycleComponent } from './hook/learn-life-cycle/learn-life-cycle.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'about/:userName',
    component: AboutComponent,
  },
  {
    path: 'addUser',
    component: AddUserComponent,
  },
  {
    path: 'learn',
    component: LearnLifeCycleComponent,
  },
];

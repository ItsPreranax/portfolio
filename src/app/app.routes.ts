import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',pathMatch:'full',
    },
    {
        path:'home',
        loadComponent:()=>import('./pages/home/home').then(m=>m.Home)
    },
    {
        path:'about',
        loadComponent:()=>import('./pages/about/about').then(m=>m.About)
    },
    {
        path:'contact',
        loadComponent:()=>import('./pages/contact/contact').then(m=>m.Contact)
    },
    {
        path:'experience',
        loadComponent:()=>import('./pages/experience/experience').then(m=>m.Experience)
    },
    {
        path:'projects',
        loadComponent:()=>import('./pages/projects/projects').then(m=>m.Projects)
    },
    {
        path:'skills',
        loadComponent:()=>import("./pages/skills/skills").then(m=>m.Skills)
    }

];

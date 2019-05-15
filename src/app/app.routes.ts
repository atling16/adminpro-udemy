import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LogingComponent } from './loging/loging.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { Component } from '@angular/core';
import { NopagefundComponent } from './shared/nopagefund/nopagefund.component';


import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './loging/register.component';


const appRoutes: Routes = [
    {path: '',
     component: PagesComponent,
     children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'progress', component: ProgressComponent},
        {path: 'graficas1', component: Graficas1Component},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full' }
       ]
    },
    {path: 'login', component: LogingComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: NopagefundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
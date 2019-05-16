import { RouterModule, Routes } from "@angular/router";


import { LogingComponent } from './loging/loging.component';
import { NopagefundComponent } from './shared/nopagefund/nopagefund.component';
import { RegisterComponent } from './loging/register.component';


const appRoutes: Routes = [
    {path: 'login', component: LogingComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: NopagefundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
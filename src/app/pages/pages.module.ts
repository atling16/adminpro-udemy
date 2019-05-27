import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { sharedStylesheetJitUrl } from '@angular/compiler';
import {FormsModule} from '@angular/forms';

// ng2-charts
import { ChartsModule } from 'ng2-charts';


// shared.modules
import { SharedModules } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
// Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';







@NgModule({
declarations: [
   DashboardComponent,
   ProgressComponent,
   PagesComponent,
   Graficas1Component,
   GraficoDonaComponent,
   IncrementadorComponent,
   AccoutSettingsComponent

],
exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
],
 imports: [
    SharedModules,
    PAGES_ROUTES,
   //  PagesModule,
   FormsModule,
   ChartsModule
 ]

})
export class PagesModule {

}
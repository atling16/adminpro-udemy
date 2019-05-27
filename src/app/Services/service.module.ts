import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';

import {
  SettingsService,
  SidebarService,
  SharedService
} from './service.index';

@NgModule({
  declarations: [],
  providers: [
  SettingsService,
  SidebarService,
  SharedService
  ],
  imports: [
    CommonModule
  ]

})
export class ServiceModule { }

import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefundComponent } from './nopagefund/nopagefund.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';




@NgModule({

 imports: [
RouterModule,
CommonModule
 ],
declarations: [
    NopagefundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent
],
exports: [
    NopagefundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent
]

})

export class SharedModules {

}

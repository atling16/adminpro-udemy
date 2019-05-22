import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { LogingComponent } from './loging/loging.component';
import { RegisterComponent } from './loging/register.component';

// Rutas
import { APP_ROUTES } from './app.routes';

 // Modulos
import { PagesModule } from './pages/pages.module';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [

    AppComponent,
    LogingComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES,
    PagesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

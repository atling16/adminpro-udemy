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
// Servicios
import { SettingsService } from './Services/settings/settings.service';
import { ServiceModule } from './Services/service.module';

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
    ServiceModule,
    FormsModule
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

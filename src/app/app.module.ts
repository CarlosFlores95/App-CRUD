import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { TablaComponent } from './Components/tabla/tabla.component';
import { APP_ROUTING } from './app.routes';
import { UsersService } from './Services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormularioComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

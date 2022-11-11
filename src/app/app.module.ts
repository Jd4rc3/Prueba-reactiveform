import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule} from "@angular/forms";
import { NombreComponent } from './nombre/nombre.component';
import { ApellidoComponent } from './apellido/apellido.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NombreComponent,
    ApellidoComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

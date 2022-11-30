import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  { path: "", component: ProyectosComponent },
  { path: "acerca", component: AcercaComponent },
  { path: "proyectos/:id", component: ProyectoComponent },
  { path: "proyectos/:id/hero", component: HeroComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProyectosComponent,
    AcercaComponent,
    HeroComponent,
    ProyectoComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

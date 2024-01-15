import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './components/front-cliente/nav/nav.component';
import { HomeComponent } from './components/front-cliente/home/home.component';
import { CarrosselProdComponent } from './components/front-cliente/carrosseis/carrossel-prod/carrossel-prod.component';
import { CardProdComponent } from './components/front-cliente/cards/card-prod/card-prod.component';
import { FooterComponent } from './components/front-cliente/footer/footer.component';

import { RouterLinkActive } from '@angular/router';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { PerfumariaComponent } from './components/front-cliente/linha-cosmeticos/perfumaria/perfumaria.component';
import { HeaderComponent } from './components/front-cliente/header/header.component';
import { MeusPedidosComponent } from './components/front-cliente/linha-cosmeticos/meus-pedidos/meus-pedidos.component';
import { RostoComponent } from './components/front-cliente/linha-cosmeticos/rosto/rosto.component';
import { MaquiagemComponent } from './components/front-cliente/linha-cosmeticos/maquiagem/maquiagem.component';
import { InfantilComponent } from './components/front-cliente/linha-cosmeticos/infantil/infantil.component';
import { TesteFrontComponent } from './components/teste-front/teste-front.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CarrosselProdComponent,
    CardProdComponent,
    FooterComponent,
    PerfumariaComponent,
    HeaderComponent,
    MeusPedidosComponent,
    RostoComponent,
    MaquiagemComponent,
    InfantilComponent,
    TesteFrontComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterLinkActive,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    AppRoutingModule
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }

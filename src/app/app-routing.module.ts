import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/front-cliente/home/home.component';
import { PerfumariaComponent } from './components/front-cliente/linha-cosmeticos/perfumaria/perfumaria.component';
import { CorpoEBanhoComponent } from './components/front-cliente/linha-cosmeticos/corpo-e-banho/corpo-e-banho.component';
import { MeusPedidosComponent } from './components/front-cliente/linha-cosmeticos/meus-pedidos/meus-pedidos.component';
import { CabelosComponent } from './components/front-cliente/linha-cosmeticos/cabelos/cabelos.component';
import { RostoComponent } from './components/front-cliente/linha-cosmeticos/rosto/rosto.component';
import { MaquiagemComponent } from './components/front-cliente/linha-cosmeticos/maquiagem/maquiagem.component';
import { InfantilComponent } from './components/front-cliente/linha-cosmeticos/infantil/infantil.component';
import { TesteFrontComponent } from './components/teste-front/teste-front.component';

const routes: Routes = [
  {path: '', component: TesteFrontComponent},
  {path: 'home', component: HomeComponent},
  {path: 'meus-pedidos', component: MeusPedidosComponent},
  {path: 'perfumaria', component: PerfumariaComponent},  
  {path: 'corpo-e-banho', component: CorpoEBanhoComponent},
  {path: 'cabelos', component: CabelosComponent},
  {path: 'rosto', component: RostoComponent},  
  {path: 'maquiagem', component: MaquiagemComponent},
  {path: 'infantil', component: InfantilComponent},

  {path: 'teste', component: TesteFrontComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

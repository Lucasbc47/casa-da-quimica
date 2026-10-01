import { Routes } from '@angular/router';


import { Cadastro } from './cadastro/cadastro';
import { Cesta } from './cesta/cesta';
import { Detalhe } from './detalhe/detalhe';
import { Login } from './login/login';
import { Pedido } from './pedido/pedido';
import { ResultadoBusca } from './resultado-busca/resultado-busca';
import { Vitrine } from './vitrine/vitrine';

export const routes: Routes = [
  { path: '', component: Vitrine },
  { path: 'vitrine', component: Vitrine },
  { path: 'detalhe/:codigo', component: Detalhe },
  { path: 'busca', component: ResultadoBusca },
  { path: 'cesta', component: Cesta },
  { path: 'pedido', component: Pedido },
  { path: 'login', component: Login },
  { path: 'cadastro', component: Cadastro },
  { path: '**', redirectTo: '' },
];

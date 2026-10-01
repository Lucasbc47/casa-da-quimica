import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';
import { CestaService } from '../service/cesta.service';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-vitrine',
  styleUrl: './vitrine.css',
  templateUrl: './vitrine.html',
})
export class Vitrine {
  lista: Produto[] = [];

  constructor(
    private produtoService: ProdutoService,
    private cesta: CestaService,
    private router: Router,
  ) {
    this.lista = this.produtoService.listar();
  }

  comprar(produto: Produto) {
    this.cesta.adicionar(produto);
    this.router.navigate(['/cesta']);
  }
}

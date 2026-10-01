import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';
import { CestaService } from '../service/cesta.service';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-resultado-busca',
  styleUrl: './resultado-busca.css',
  templateUrl: './resultado-busca.html',
})
export class ResultadoBusca {
  termo = '';
  lista: Produto[] = [];

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private cesta: CestaService,
    private router: Router,
  ) {
    // Pega o termo digitado na URL (busca?q=...)
    this.termo = this.route.snapshot.queryParamMap.get('q') || '';
    this.lista = this.produtoService.pesquisar(this.termo);
  }

  comprar(produto: Produto) {
    this.cesta.adicionar(produto);
    this.router.navigate(['/cesta']);
  }
}

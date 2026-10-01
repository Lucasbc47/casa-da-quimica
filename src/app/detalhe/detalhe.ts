import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';
import { CestaService } from '../service/cesta.service';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-detalhe',
  styleUrl: './detalhe.css',
  templateUrl: './detalhe.html',
})
export class Detalhe implements OnInit {
  produto?: Produto;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService,
    private cesta: CestaService,
  ) {}

  ngOnInit() {
    const codigo = Number(this.route.snapshot.paramMap.get('codigo'));
    this.produto = this.produtoService.buscarPorCodigo(codigo);
  }

  comprar() {
    if (this.produto) {
      this.cesta.adicionar(this.produto);
      this.router.navigate(['/cesta']);
    }
  }
}

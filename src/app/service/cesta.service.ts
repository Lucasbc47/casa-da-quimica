import { Injectable } from '@angular/core';
import { ItemCesta } from '../model/item-cesta';
import { Produto } from '../model/produto';

@Injectable({ providedIn: 'root' })
export class CestaService {
  itens: ItemCesta[] = [];

  constructor() {
    if (typeof localStorage !== 'undefined') {
      const salvo = localStorage.getItem('cesta');
      if (salvo) {
        this.itens = JSON.parse(salvo);
      }
    }
  }

  adicionar(produto: Produto) {
    const item = this.itens.find((i) => i.produto.codigo === produto.codigo);
    if (item) {
      if (item.quantidade < produto.quantidade) {
        item.quantidade++;
      }
    } else {
      this.itens.push({ produto: produto, quantidade: 1 });
    }
    this.salvar();
  }

  diminuir(item: ItemCesta) {
    item.quantidade--;
    if (item.quantidade <= 0) {
      this.remover(item);
    }
    this.salvar();
  }

  remover(item: ItemCesta) {
    this.itens = this.itens.filter((i) => i !== item);
    this.salvar();
  }

  limpar() {
    this.itens = [];
    this.salvar();
  }

  precoItem(item: ItemCesta): number {
    const p = item.produto;
    return (p.promo > 0 ? p.promo : p.valor) * item.quantidade;
  }

  total(): number {
    let soma = 0;
    for (const item of this.itens) {
      soma = soma + this.precoItem(item);
    }
    return soma;
  }

  quantidadeTotal(): number {
    let soma = 0;
    for (const item of this.itens) {
      soma = soma + item.quantidade;
    }
    return soma;
  }

  private salvar() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('cesta', JSON.stringify(this.itens));
    }
  }
}

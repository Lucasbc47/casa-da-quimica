import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';

@Injectable({ providedIn: 'root' })
export class ProdutoService {
  private lista: Produto[] = [
    {
      codigo: 1,
      simbolo: 'Bq',
      nome: 'Béquer de Vidro 500ml',
      descritivo: 'Vidro borossilicato resistente ao calor. Graduado, porque na química tudo é medido com precisão.',
      quantidade: 30,
      valor: 39.9,
      promo: 0,
      destaque: 1,
    },
    {
      codigo: 2,
      simbolo: 'Er',
      nome: 'Frasco Erlenmeyer 250ml',
      descritivo: 'O clássico frasco cônico. Mistura sem derramar, até nas aulas mais agitadas.',
      quantidade: 25,
      valor: 34.9,
      promo: 29.9,
      destaque: 0,
    },
    {
      codigo: 3,
      simbolo: 'Jl',
      nome: 'Jaleco Branco Profissional',
      descritivo: 'Jaleco de algodão com bolsos. Transmite autoridade instantânea em qualquer sala de aula.',
      quantidade: 15,
      valor: 89.9,
      promo: 0,
      destaque: 1,
    },
    {
      codigo: 4,
      simbolo: 'Op',
      nome: 'Óculos de Proteção',
      descritivo: 'Lente de policarbonato antiembaçante. Segurança em primeiro lugar, sempre.',
      quantidade: 40,
      valor: 24.9,
      promo: 19.9,
      destaque: 0,
    },
    {
      codigo: 5,
      simbolo: 'Lv',
      nome: 'Luvas Nitrílicas (100 un)',
      descritivo: 'Caixa com 100 luvas descartáveis sem pó. Não deixe digitais... de reagente na bancada.',
      quantidade: 50,
      valor: 49.9,
      promo: 39.9,
      destaque: 0,
    },
    {
      codigo: 6,
      simbolo: 'Mg',
      nome: 'Máscara de Gás Respiratória',
      descritivo: 'Máscara facial com filtro duplo. Para quando a experiência começa a cheirar estranho.',
      quantidade: 8,
      valor: 159.9,
      promo: 0,
      destaque: 1,
    },
    {
      codigo: 7,
      simbolo: 'Te',
      nome: 'Kit Tubos de Ensaio (12 un)',
      descritivo: 'Doze tubos de vidro com suporte de madeira. Perfeitos para testes de cor e reações.',
      quantidade: 35,
      valor: 29.9,
      promo: 0,
      destaque: 0,
    },
    {
      codigo: 8,
      simbolo: 'Bb',
      nome: 'Bico de Bunsen',
      descritivo: 'Queimador a gás com regulagem de chama. Aquecimento controlado, sem surpresas.',
      quantidade: 12,
      valor: 79.9,
      promo: 69.9,
      destaque: 0,
    },
    {
      codigo: 9,
      simbolo: 'Tp',
      nome: 'Pôster Tabela Periódica',
      descritivo: 'Pôster 90x60cm para a sala de aula. Os alunos podem até não prestar atenção, mas a tabela está lá.',
      quantidade: 60,
      valor: 19.9,
      promo: 0,
      destaque: 0,
    },
    {
      codigo: 10,
      simbolo: 'Cc',
      nome: 'Calculadora Científica',
      descritivo: 'Calcula massa molar, estequiometria e até o troco do lanche. Esgotada, todo mundo quis.',
      quantidade: 0,
      valor: 64.9,
      promo: 0,
      destaque: 0,
    },
    {
      codigo: 11,
      simbolo: 'Cn',
      nome: 'Caneca de Porcelana 350ml',
      descritivo: 'Simples e resistente. Para o café antes da aula das 7h.',
      quantidade: 45,
      valor: 34.9,
      promo: 0,
      destaque: 0,
    },
    {
      codigo: 12,
      simbolo: 'Tr',
      nome: 'Trailer Usado (Seminovo)',
      descritivo: 'Motorhome com muita história e pouca quilometragem. Ideal para acampar no deserto. Cheiro incluso sem custo adicional.',
      quantidade: 1,
      valor: 18000,
      promo: 14999.9,
      destaque: 1,
    },
  ];

  listar(): Produto[] {
    return this.lista;
  }

  buscarPorCodigo(codigo: number): Produto | undefined {
    return this.lista.find((p) => p.codigo === codigo);
  }

  pesquisar(termo: string): Produto[] {

    const t = termo.trim().toLowerCase(); // PAoOoo o -> paoopooo
    // normalizar os termos, veio JaLe C o -> "jaleco"

    return this.lista.filter // .filter é uma funcao que recebe outra.
      // this.lista, seria a lista em si.
      // lista de objetos do tipo objeto Produto
    (
      // o P aqui é voce iterar sobre cada um.
      (p) => p.nome.toLowerCase()
        .includes(t) // "jaleco" === "jaleco"?
        || p.descritivo.toLowerCase().includes(t),
          // jaleco branco...
    );
  }



  precoFinal(p: Produto): number {
    return p.promo > 0 ? p.promo : p.valor;
  }
}

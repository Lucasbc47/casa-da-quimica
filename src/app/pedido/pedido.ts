import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-pedido',
  styleUrl: './pedido.css',
  templateUrl: './pedido.html',
})
export class Pedido {
  numero = Math.floor(Math.random() * 90000) + 10000;
}

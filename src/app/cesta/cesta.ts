import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CestaService } from '../service/cesta.service';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-cesta',
  styleUrl: './cesta.css',
  templateUrl: './cesta.html',
})
export class Cesta {
  constructor(
    public cesta: CestaService,
    private router: Router,
  ) {}

  limpar() {
    if (confirm('Deseja mesmo limpar a cesta?')) {
      this.cesta.limpar();
    }
  }

  finalizar() {
    this.cesta.limpar();
    this.router.navigate(['/pedido']);
  }
}

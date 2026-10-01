import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Cliente } from '../model/cliente';

@Component({
  imports: [CommonModule, FormsModule, RouterLink],
  selector: 'app-cadastro',
  styleUrl: './cadastro.css',
  templateUrl: './cadastro.html',
})
export class Cadastro {
  cliente: Cliente = new Cliente();
  confirmaSenha = '';
  enviado = false;

  senhasDiferentes(): boolean {
    return this.confirmaSenha !== '' && this.confirmaSenha !== this.cliente.senha;
  }

  cadastrar(f: NgForm) {
    if (f.invalid || this.senhasDiferentes()) {
      return;
    }
    this.enviado = true;
  }
}

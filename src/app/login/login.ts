import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Reenvio } from '../reenvio/reenvio';

@Component({
  imports: [CommonModule, FormsModule, RouterLink, Reenvio],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  email = '';
  senha = '';
  logado = false;

  entrar(f: NgForm) {
    if (f.invalid) {
      return;
    }
    this.logado = true;
  }
}

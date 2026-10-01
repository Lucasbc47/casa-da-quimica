import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-reenvio',
  styleUrl: './reenvio.css',
  templateUrl: './reenvio.html',
})
export class Reenvio {
  email = '';
  enviado = false;

  enviar(f: NgForm) {
    if (f.invalid) {
      return;
    }
    this.enviado = true;
  }
}

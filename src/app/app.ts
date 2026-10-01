import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { Barrabusca } from './barrabusca/barrabusca';
import { CestaService } from './service/cesta.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, Barrabusca],

  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(public cesta: CestaService) {}
}

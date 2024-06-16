import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApiPortafolioService } from '../../services/api-portafolio.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  private readonly apiPortafolioService = inject(ApiPortafolioService);
  responseApi$ = this.apiPortafolioService.getEnlaces();
}

import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from '../title/title.component';
import { ApiPortafolioService } from '../../services/api-portafolio.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NgOptimizedImage,
    TitleComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  private readonly apiPortafolioService = inject(ApiPortafolioService);
  responseApi$ = this.apiPortafolioService.getProyecto();

  public tituloId ="2";
  public titulo = "someProjects";
}

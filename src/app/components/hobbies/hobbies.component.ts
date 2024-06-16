import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from '../title/title.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ApiPortafolioService } from '../../services/api-portafolio.service';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TitleComponent,
  ],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent {
  private readonly apiPortafolioService = inject(ApiPortafolioService);
  responseApi$ = this.apiPortafolioService.getYoutubes();

  public tituloId ="3";
  public titulo = "someHobbies";

  contAfterRender: number = 1;
  contAfterNextRender: number = 1;

  constructor(private domSanitizer: DomSanitizer) { }

  sanitize(embed: string) : SafeResourceUrl {
    // console.log(embed)
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${embed}`);
  }
}

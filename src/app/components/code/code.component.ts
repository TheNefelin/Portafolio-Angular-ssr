import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-code',
  standalone: true,
  imports: [
    TitleComponent
  ],
  templateUrl: './code.component.html',
  styleUrl: './code.component.css'
})
export class CodeComponent {
  public tituloId ="1";
  public titulo = "someExperience";
}

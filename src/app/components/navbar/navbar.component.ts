import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  changeTheme() {
    const html = document.querySelector("html")

    if (html?.getAttribute("data-theme") === "winter")
      html?.setAttribute("data-theme", "night"); 
    else
      html?.setAttribute("data-theme", "winter"); 
  }

}

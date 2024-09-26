import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  changeTheme() {
    const html = document.querySelector("html")

    if (html?.getAttribute("data-theme") === "night") {
      html?.setAttribute("data-theme", "winter");
      console.log("winter");
    }      
    else {
      html?.setAttribute("data-theme", "night");  
      console.log("night");
    }
  }

}

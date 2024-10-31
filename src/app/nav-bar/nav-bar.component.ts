import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  // Killswitches
  blogEnabled = true
  menuOpen = false;

  constructor(private router: Router){}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  navigateHome(){
    this.router.navigate(['/']);
  }

}

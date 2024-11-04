import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeadingComponent } from './heading/heading.component';
import { ServiceCardComponent } from './heading/service-card/service-card.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { ExperienceComponent } from './experience/experience.component';
import { DomSanitizer } from '@angular/platform-browser';
import { CompanyCarouselComponent } from './company-carousel/company-carousel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, HeadingComponent, NgFor, ServiceCardComponent, ContactSectionComponent, ExperienceComponent, CompanyCarouselComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [],
})
export class AppComponent {
  constructor(
    public sanitizer: DomSanitizer
  ){
  }

  ngOnInit(): void { }

}


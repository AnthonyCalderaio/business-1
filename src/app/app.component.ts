import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeadingComponent } from './projects/consulting/heading/heading.component';
import { ServiceCardComponent } from './projects/consulting/heading/service-card/service-card.component';
import { ContactSectionComponent } from './projects/consulting/contact-section/contact-section.component';
import { ExperienceComponent } from './projects/consulting/experience/experience.component';
import { SERVICES } from './projects/consulting/services/service.data';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { CompanyCarouselComponent } from './company-carousel/company-carousel.component';
import { NavBarComponent } from './projects/consulting/nav-bar/nav-bar.component';

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
    public sanitizer: DomSanitizer,
    private http: HttpClient
  ){
  }

  ngOnInit(): void { }



}


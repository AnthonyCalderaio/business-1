import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeadingComponent } from '../heading/heading.component';
import { NgFor } from '@angular/common';
import { CompanyCarouselComponent } from '../../../company-carousel/company-carousel.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ServiceCardComponent } from '../heading/service-card/service-card.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { SERVICES } from '../services/service.data';
import { ContactSectionComponent } from '../contact-section/contact-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContactSectionComponent, FormsModule, HeadingComponent, NgFor, ServiceCardComponent, ContactSectionComponent, ExperienceComponent, CompanyCarouselComponent, NavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  githubSnippet = undefined; //this.sanitizer.bypassSecurityTrustHtml('<script src="https://gist.github.com/AnthonyCalderaio/9afa05e621b0dcc80bb5251520f5c8ce.js"></script>');
  title = 'business-1';
  services = SERVICES;

}

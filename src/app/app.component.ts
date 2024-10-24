import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeadingComponent } from './projects/consulting/heading/heading.component';
import { ServiceCardComponent } from './projects/consulting/heading/service-card/service-card.component';
import { ContactSectionComponent } from './projects/consulting/contact-section/contact-section.component';
import { ExperienceComponent } from './projects/consulting/experience/experience.component';
import { SERVICES } from './projects/consulting/services/service.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, HeadingComponent, NgFor, ServiceCardComponent, ContactSectionComponent, ExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'business-1';

 
  services = SERVICES;

}


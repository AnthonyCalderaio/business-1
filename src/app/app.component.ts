import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeadingComponent } from './projects/consulting/heading/heading.component';
import { ServiceCardComponent } from './projects/consulting/heading/service-card/service-card.component';
import { ContactSectionComponent } from './projects/consulting/contact-section/contact-section.component';
import { ExperienceComponent } from './projects/consulting/experience/experience.component';
import { SERVICES } from './projects/consulting/services/service.data';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { CompanyCarouselComponent } from './company-carousel/company-carousel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, HeadingComponent, NgFor, ServiceCardComponent, ContactSectionComponent, ExperienceComponent, CompanyCarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [],
})
export class AppComponent {
  githubSnippet = undefined; //this.sanitizer.bypassSecurityTrustHtml('<script src="https://gist.github.com/AnthonyCalderaio/9afa05e621b0dcc80bb5251520f5c8ce.js"></script>');
  

  
  title = 'business-1';
  services = SERVICES;

  constructor(
    public sanitizer: DomSanitizer,
    private http: HttpClient
  ){
  }

  ngOnInit(): void { }


}


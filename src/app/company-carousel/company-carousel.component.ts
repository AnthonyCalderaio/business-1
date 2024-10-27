import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

interface Brand {
  name: string;
  logo: string; // URL of the logo
  website: string; // URL for the company website
}

@Component({
  selector: 'app-company-carousel',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './company-carousel.component.html',
  styleUrl: './company-carousel.component.scss'
})
export class CompanyCarouselComponent {

  brands: Brand[] = [
    {
      name: 'Dicks',
      logo: 'assets/brands/dicks-sporting-goods-logo.webp',
      website: 'https://www.dickssportinggoods.com/'
    },
    {
      name: 'Papa Johns',
      logo: 'assets/brands/papajohns.jpg',
      website: 'https://www.papajohns.com/'
    },
    {
      name: 'Agnes Intelligence',
      logo: 'assets/brands/agnes_intelligence.jpg',
      website: 'https://www.agnes.ai/'
    },
    {
      name: 'Dycom Industries',
      logo: 'assets/brands/dycom_industries.jpg',
      website: 'https://dycomind.com/'
    },
    {
      name: 'Waste Advantage Magazine',
      logo: 'assets/brands/waste_advantage_magazine_logo.jpg',
      website: 'https://wasteadvantagemag.com/'
    }
  ];
}

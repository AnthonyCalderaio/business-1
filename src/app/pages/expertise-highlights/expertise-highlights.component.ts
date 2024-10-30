import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-expertise-highlights',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './expertise-highlights.component.html',
  styleUrl: './expertise-highlights.component.scss'
})
export class ExpertiseHighlightsComponent {

  expertise = [
    { title: 'Dicks Sporting Goods', description: 'Feature Development', result: 'Developed many features using A/B tests to generate millions in revenue.' },
    { title: 'Agnes', description: 'Developed UI in Angular', result: 'UI developed in Angular in three weeks replacing their old outdated vanilla UI integrated with AWS and in-house data science API.' },
    { title: 'Papa Johns', description: 'Modernized UI', result: 'Contributed in converting existing site pages like home page and components like "rewards" to modern Angular Architecture.' }
  ];

  publications = [
    { highlight: 'Virtual-flow', description: 'Covid-19 protein sorting', result: '' , githubUrl: 'https://github.com/AnthonyCalderaio/virtual-flow_virtual_table', workUrl:'https://chemrxiv.org/engage/chemrxiv/article-details/60c74e21f96a00ef88287a63'},
    // { highlight: 'Enhanced Revenue', description: 'Revamped e-commerce...', result: '25% revenue increase' },
    // { highlight: 'Cost Savings', description: 'Optimized cloud infrastructure...', result: 'Saving $500K annually' }
  ];

}
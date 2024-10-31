import { Component } from '@angular/core';
import { BlogPost } from '../../models/blog-post.interface';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [TruncatePipe, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

  blogPosts: BlogPost[] = [
    // {
    //   id: 1,
    //   title: 'Exploring Angular 15 Features',
    //   author: 'John Doe',
    //   content: 'Angular 15 comes with a lot of exciting features and improvements...',
    //   date: new Date('2023-01-01'),
    //   imageUrl: 'https://via.placeholder.com/150',
    // },
    // {
    //   id: 2,
    //   title: 'Introduction to RxJS',
    //   author: 'Jane Smith',
    //   content: 'RxJS is a powerful library for reactive programming in JavaScript...',
    //   date: new Date('2023-02-15'),
    //   imageUrl: 'https://via.placeholder.com/150',
    // },
    {
      id: 1,
      title: 'What the US Election Could Mean for the Global Chip Market',
      author: 'Amber Jackson',
      content: 'Taiwan produces nearly 60% of the world\'s semiconductor chip supply and nearly 90% of the most advanced chips needed to power AI',
      date: new Date('2024-10-29'),
      blogUrl: 'https://datacentremagazine.com/critical-environments/what-the-us-election-could-mean-for-the-global-chip-market',
      imageUrl: 'https://assets.bizclikmedia.net/1336/4c8b00d59f90f2eae8de5613359aea89:cbd1fc18ff66094df1ef57f14ff6ac71/142126ea-us-debate.webp',
    }
  ];

  constructor() {}

  ngOnInit(): void {
    this.blogPosts = this.blogPosts;
  }

  readMore(url:string){
    window.open(url);
  }

}

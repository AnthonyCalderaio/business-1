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
    {
      id: 1,
      title: 'Exploring Angular 15 Features',
      author: 'John Doe',
      content: 'Angular 15 comes with a lot of exciting features and improvements...',
      date: new Date('2023-01-01'),
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Introduction to RxJS',
      author: 'Jane Smith',
      content: 'RxJS is a powerful library for reactive programming in JavaScript...',
      date: new Date('2023-02-15'),
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.blogPosts = this.blogPosts;
  }

}

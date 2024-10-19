import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [NgIf],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent {
  @Input() title = '';
  @Input() content = '';
  @Input() date = '';
  @Input() link = '';

}

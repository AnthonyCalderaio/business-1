import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BlogPostComponent } from './blog-post/blog-post.component';
let BlogsObject = require('./blog-post/posts.json');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, BlogPostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'business-1';

  name = '';
  email = '';
  phone = '';
  message = '';

  blogs = BlogsObject.blogs

  onSubmit() {
    console.log('Form submitted', { name: this.name, email: this.email, phone: this.phone, message: this.message });
    // Here you would typically send this data to a server
    alert('Thank you for your inquiry. We will get back to you within 2 hours!');
    this.name = '';
    this.email = '';
    this.phone = '';
    this.message = '';
  }
}

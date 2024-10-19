import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('hiddenNameInput') hiddenNameInput!: ElementRef;
  @ViewChild('hiddenEmailInput') hiddenEmailInput!: ElementRef;

  @ViewChild('shownNameInput') shownNameInput!: ElementRef;
  @ViewChild('shownEmailInput') shownEmailInput!: ElementRef;

  name = '';
  email = '';
  phone = '';
  message = '';

  blogs = BlogsObject.blogs

  onSubmit() {
    console.log('Form submitted', { name: this.name, email: this.email, phone: this.phone, message: this.message });
    // Here you would typically send this data to a server
    alert('Thank you for your inquiry. We will get back to you within 2 hours!');
    this.hiddenNameInput.nativeElement.value = this.shownNameInput.nativeElement.value;
    this.hiddenEmailInput.nativeElement.value = this.shownEmailInput.nativeElement.value;

    const indexForm = document.getElementById('hiddenIndexForm') as HTMLFormElement;
    if (indexForm) {
      indexForm.submit(); // Submit the index.html form
  }
  }
}

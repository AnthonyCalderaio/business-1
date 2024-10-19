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
  // @ViewChild('hiddenNameInput', { static: false }) hiddenNameInput!: ElementRef;
  // @ViewChild('hiddenemailinput', { static: false }) hiddenemailinput!: ElementRef;

  @ViewChild('shownNameInput', { static: false }) shownNameInput!: ElementRef;
  @ViewChild('shownEmailInput', { static: false }) shownEmailInput!: ElementRef;
  @ViewChild('shownPhoneInput', { static: false }) shownPhoneInput!: ElementRef;
  @ViewChild('shownMessageInput', { static: false }) shownMessageInput!: ElementRef;

  name = '';
  email = '';
  phone = '';
  message = '';

  blogs = BlogsObject.blogs

  onSubmit() {
    console.log('Form submitted', { name: this.name, email: this.email, phone: this.phone, message: this.message });
    // alert('Thank you for your inquiry. We will get back to you within 2 hours!');

    let thing = document.getElementById('hiddenNameInput');
    if(document.getElementById('hiddenNameInput')){
      (document.getElementById('hiddenNameInput') as any).value = this.shownNameInput.nativeElement.value;
    }

    let thing2 = document.getElementById('hiddenEmailInput');
    if(document.getElementById('hiddenEmailInput')){
      (document.getElementById('hiddenEmailInput') as any).value = this.shownEmailInput.nativeElement.value;
    }

    let thing3 = document.getElementById('hiddenPhoneInput');
    if(document.getElementById('hiddenPhoneInput')){
      (document.getElementById('hiddenPhoneInput') as any).value = this.shownPhoneInput.nativeElement.value;
    }


    let thing4 = document.getElementById('hiddenMessageInput');
    if(document.getElementById('hiddenMessageInput')){
      (document.getElementById('hiddenMessageInput') as any).value = this.shownMessageInput.nativeElement.value;
    }
    const indexForm = document.getElementById('hiddenIndexForm') as HTMLFormElement;
    if (indexForm) {
      indexForm.submit(); // Submit the index.html form
  }
  }
}


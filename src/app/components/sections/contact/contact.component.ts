import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  fullName: string;
  email: string;
  contactNumber: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData: ContactForm = {
    fullName: '',
    email: '',
    contactNumber: '',
    message: ''
  };

  onSubmit(): void {
    console.log('Form submitted:', this.formData);
    // Reset form after submission
    this.formData = {
      fullName: '',
      email: '',
      contactNumber: '',
      message: ''
    };
  }
}

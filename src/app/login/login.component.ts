import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; // Import required modules


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,      // Import CommonModule to use ngIf, ngClass, etc.
    ReactiveFormsModule // Import ReactiveFormsModule for form handling
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the form with validation
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Getter for easy access to form controls
  get f() {
    return this.loginForm.controls;
  }

  // Handle form submission
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    
    console.log('Login successful with username:', username, 'and password:', password);
    // Here, you can integrate with a backend service for authentication
  }
}

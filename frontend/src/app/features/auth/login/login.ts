import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  login(): void {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.getRawValue();

    this.authService.login(
      email!,
      password!
    ).subscribe({

      next: (response) => {

        console.log('LOGIN RESPONSE:', response);

        localStorage.setItem('token', response.token);

        localStorage.setItem(
          'user',
          JSON.stringify(response.user)
        );

        this.router.navigate(['/home']);

      },

      error: () => {

        alert('Correo o contraseña incorrectos.');

      }

    });

  }

}
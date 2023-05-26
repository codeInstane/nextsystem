import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    const email = this.loginForm.get('email');
    const password = this.loginForm.get('password');
    this.authService.authenticate(email, password);
    console.log(email,password);
  }

}

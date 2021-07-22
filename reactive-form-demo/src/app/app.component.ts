import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { PasswordChecker } from './CustomValidators/password-checker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor( private fb: FormBuilder ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTandC: ['', Validators.required]
    }, {
      validators: PasswordChecker('password', 'confirmPassword')
    });
  }

  get h() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    console.table(this.registerForm.value);
    alert('Success' + JSON.stringify(this.registerForm.value));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}

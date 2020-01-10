import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

interface IExampleCredentials {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  example_users: IExampleCredentials[] = [
    { email: 'admin@django.com', password: '123' },
    { email: 'userstaff@django.com', password: '123' },
    { email: 'user@django.com', password: '123' },
  ]

  // form
	email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  password: FormControl = new FormControl('', [Validators.required]);

  credentials: IExampleCredentials = {
    email: '',
    password: '',
  }
  hide: boolean = true;

  checkoutForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.checkoutForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  ngOnInit() {
    this.setChangeValidate()
  }

  getErrorMessage(): string {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

  setChangeValidate(): void {
    // console.log(this.checkoutForm);
    this.checkoutForm.get('email').valueChanges.subscribe(
      (email) => {
        console.log(email);
      }
    );
    this.checkoutForm.get('password').valueChanges.subscribe(
      (password) => {
        console.log(password);
      }
    );
  }

  onSubmit(form: FormControl): void {
    // Process checkout data here
    console.log(form);
    // this.checkoutForm.reset();
    // this.router.navigateByUrl('/chat');
  }

  setUser(index: number): void {
    console.log(this.email);
    this.checkoutForm.get('email').setValue(
      this.example_users[index].email
    );
    this.checkoutForm.get('password').setValue(
      this.example_users[index].password
    );
  }

}

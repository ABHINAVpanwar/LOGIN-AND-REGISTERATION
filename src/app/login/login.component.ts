import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}
  id: any;
  pass: any;
  login() {
    if (this.id == "hr@gmail.com" && this.pass == 123456) {
      alert('LOGIN SUCCESSFULL');
      this.router.navigateByUrl('/employee');
    } else {
      alert('TRY AGAIN');
    }
  }
}

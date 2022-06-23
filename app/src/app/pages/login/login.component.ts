import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logInFailed: boolean = false; 

  constructor(private service: AuthService) { }

  ngOnInit(): void {
  }

  submit() {

    let email = (<HTMLInputElement>document.getElementById("email")).value
    let password = (<HTMLInputElement>document.getElementById("password")).value
    
    let str = '{"email": "'+ email +'", "password": "'+ password +'"}';
    let json = JSON.parse(str);

    if (email && password) {
      this.service.logIn(json).subscribe({
        next: () => {
          this.logInFailed = false;
          window.location.href = "/"

        }, 
        error: () => {
          this.logInFailed = true;
        }
      });

    } else {
      this.logInFailed = true;
    }
  }

}

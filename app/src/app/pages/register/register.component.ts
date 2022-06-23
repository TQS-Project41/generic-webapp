import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  error_email: Boolean = false;
  error_password: Boolean = false;
  error_diff_password: Boolean = false;
  error_register: boolean = false;
  success: boolean = false;

  constructor(private fb: FormBuilder, private service: AuthService) { 
    this.registerForm = this.fb.group({
      email: [null],
      password:[null],
    });
  }


  ngOnInit(): void {
  }

  register() {

    this.reset();

    if (!this.registerForm.value["email"]) this.error_email = true;
    if (!this.registerForm.value["password"]) {
      this.error_password = true;

    } else if ( (<HTMLInputElement>document.getElementById("pass_again")).value !== this.registerForm.value["password"]) {
      this.error_diff_password = true;

    }
    
    if (this.allValid()) {
      let str = JSON.stringify(this.registerForm.value);
      let json = JSON.parse(str);

      this.service.register(json).subscribe({
        next: () => {
          this.success = true;
        }, 
        error: (error) => {
          console.log(error);
          this.error_register  =true;
        }
      });
    }
  }

  reset() {
    this.error_email = false;
    this.error_password = false;
    this.error_diff_password = false;
    this.error_register = false;
  }

  allValid() {
    if (!this.error_email && !this.error_password && !this.error_diff_password) return true;
    return false;
  }

}





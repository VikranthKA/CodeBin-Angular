import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private router:Router,private authService:AuthService){}

  register(regForm:NgForm){
    console.log(regForm.value)
    this.authService.registerUser(regForm.value.email,regForm.value.password)
    // this.router.navigate(["/login"])

  }

  reset(regForm:NgForm){
      regForm.reset()

  }

  forgotPassword(){

  }
}

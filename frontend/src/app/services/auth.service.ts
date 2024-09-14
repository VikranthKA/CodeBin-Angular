import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  registerUser(email: string, password: string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user, "userRegister")
        alert("Successfully registered!")
        this.router.navigate(["/"])
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error in the signUp")
      })


  }

  loginUser(email:string,password:string){
    const auth = getAuth();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      const user = userCredential.user
      console.log(user,"userLogin")
      alert("Login Success")
    })
    .catch((error)=>{
      const errorCode = error.code
      const errorMessage = error.message
      alert("Error while loggin")
    })
  }
}

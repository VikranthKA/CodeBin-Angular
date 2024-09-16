import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, onAuthStateChanged,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private uid?:string;

  constructor(private router:Router) { 
    const auth = getAuth()
    onAuthStateChanged(auth,(user)=>{
      if(user){
        this.uid = user.uid
        console.log(user.email,"uid")
      }else{
        this.uid = undefined
        console.log("user Logged out")
      }
    })
  }


  isAuthenticated(){
    return this.uid ? true :false
  }

  getUid(){
    return this.uid
  }




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


  logout(){
    const auth = getAuth()
    signOut(auth).then(()=>{

    }).catch((error)=>{

    })
  }
}

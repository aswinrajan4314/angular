import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from "firebase/compat/app"
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  appUser$;

  constructor(
    private afs:AngularFirestore,
    private route:ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,private afAuth: AngularFireAuth
  ) {
    this.appUser$ = this.afAuth.authState; }

  AdminLogin(username: any, password :any){
    console.log(username,password)
    return this.afs.collection('adminlogin', (ref) => ref.where("username","==",
    username )
    .where("password","==",password) )
    .valueChanges({ idField: "adminloginId" })
    }

    dipologin(musername: any, mpassword :any){
      console.log(musername,mpassword);
      return this.afs.collection('dipot', (ref) => ref.where("user_name","==",
      musername )
      .where("password","==",mpassword) )
      .valueChanges({ idField: "dipoId" })

      
}

login() {
 
  this.afAuth
    .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(async (res: any) => {

      localStorage.setItem('userid', res.user.uid);
      this.router.navigate(['/customerMaster/customerhome']);
      console.log(res)
    })
}

}

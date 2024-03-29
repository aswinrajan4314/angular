import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class PasloginService {
  appUser$;

  constructor(
    public afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router,
    private afs: AngularFirestore
  ) {
    this.appUser$ = this.afAuth.authState;
  }
  login() {
    // Store the return URL in localstorage, to be used once the user logs in successfully
    const returnUrl =
      this.route.snapshot.queryParamMap.get('returnUrl') || this.router.url;
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(() => {
      this.router.navigate(['/customermaster/customerhome']);
    });;
    
  }
  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/guestmaster/guesthome']);
    });
  }
}

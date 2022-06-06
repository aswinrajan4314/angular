import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { PasloginService } from 'src/app/services/paslogin.service';

@Component({
  selector: 'app-guestmaster',
  templateUrl: './guestmaster.component.html',
  styleUrls: ['./guestmaster.component.scss'],
})
export class GuestmasterComponent implements OnInit {
  appUser!: firebase.User;
  constructor(private router: Router, private passlogin: PasloginService) {
    this.passlogin.appUser$.subscribe(
      (appUser: any) => (this.appUser = appUser)
    );
  }
  ngOnInit(): void {}

  login() {
    this.passlogin.login();
  }
  logout()
  { this.passlogin.logout(); }
}

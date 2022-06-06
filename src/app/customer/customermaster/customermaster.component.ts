import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { PasloginService } from 'src/app/services/paslogin.service';
@Component({
  selector: 'app-customermaster',
  templateUrl: './customermaster.component.html',
  styleUrls: ['./customermaster.component.scss']
})
export class CustomermasterComponent implements OnInit {
  appUser!: firebase.User;
  constructor(private router: Router, private passlogin: PasloginService) { 
    this.passlogin.appUser$.subscribe(
      (appUser: any) => (this.appUser = appUser)
    );
  }

  ngOnInit(): void {
  }
  logout()
  { this.passlogin.logout(); }

  
}


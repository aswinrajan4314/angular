import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';
import {Router } from '@angular/router';
@Component({
  selector: 'app-incomeview',
  templateUrl: './incomeview.component.html',
  styleUrls: ['./incomeview.component.scss']
})
export class IncomeviewComponent implements OnInit {
  public incomelist: any[]=[]
  public diponame: any[]=[]
  dipoId:any;
  constructor(private router:Router,private registrationservice:RegistrationService ) { }

  ngOnInit(): void {
    this.dipoId=localStorage.getItem('dipoId')
    this.registrationservice.getincome(this.dipoId).subscribe(ref =>{
    console.log(ref)
    this.incomelist=ref;
  })
  this.dipoId=localStorage.getItem('dipoId')
  this.registrationservice.getDipoById(this.dipoId).subscribe(ref =>{
  console.log(ref)
  this.diponame[0]=ref;
})
  }

}

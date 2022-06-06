import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-expenseview',
  templateUrl: './expenseview.component.html',
  styleUrls: ['./expenseview.component.scss']
})
export class ExpenseviewComponent implements OnInit {
  public expenselist: any[]=[]
  public diponame: any[]=[]
  dipoId:any;
  constructor(private router:Router,private registrationservice:RegistrationService) { }

  ngOnInit(): void {
  this.dipoId=localStorage.getItem('dipoId')
  this.registrationservice.getexpense(this.dipoId).subscribe(ref =>{
  console.log(ref)
  this.expenselist=ref;
})
this.dipoId=localStorage.getItem('dipoId')
this.registrationservice.getDipoById(this.dipoId).subscribe(ref =>{
console.log(ref)
this.diponame[0]=ref;
})
  }

}

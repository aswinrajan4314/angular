import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';
import {Router } from '@angular/router';
@Component({
  selector: 'app-dipomaster',
  templateUrl: './dipomaster.component.html',
  styleUrls: ['./dipomaster.component.scss']
})
export class DipomasterComponent implements OnInit {
  public diponame: any[]=[]
  dipoId:any;
  constructor(private router:Router,private registrationservice:RegistrationService ) { }

  ngOnInit(): void {
    this.dipoId=localStorage.getItem('dipoId')
    this.registrationservice.getDipoById(this.dipoId).subscribe(ref =>{
    console.log(ref)
    this.diponame[0]=ref;
  })
  }

}

import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-busview',
  templateUrl: './busview.component.html',
  styleUrls: ['./busview.component.scss']
})
export class BusviewComponent implements OnInit {
  public buslist: any[]=[]
  public diponame: any[]=[]
  dipoId:any;
  constructor(private router:Router,private registrationservice:RegistrationService ) { }

  ngOnInit(): void {
    this.dipoId=localStorage.getItem('dipoId')
    this.registrationservice.getbus1(this.dipoId).subscribe(ref =>{
    console.log(ref)
    this.buslist=ref;
  })
  this.dipoId=localStorage.getItem('dipoId')
  this.registrationservice.getDipoById(this.dipoId).subscribe(ref =>{
  console.log(ref)
  this.diponame[0]=ref;
})
  }
  
  delete(busId:any){
    if(confirm("Are you sure ..?"))
    {
      this.registrationservice.deletebus(busId).then(
        ()=>(error:any)=>console.error(error)
      )
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-routeview',
  templateUrl: './routeview.component.html',
  styleUrls: ['./routeview.component.scss']
})
export class RouteviewComponent implements OnInit {
  public routelist: any[]=[]
  public diponame: any[]=[]
  dipoId:any;
  constructor(private router:Router,private registrationservice:RegistrationService ) { }



  ngOnInit(): void {
    this.dipoId=localStorage.getItem('dipoId')
    this.registrationservice.getroute1(this.dipoId).subscribe(ref =>{
      console.log(ref)
    this.routelist=ref;
  })
  this.dipoId=localStorage.getItem('dipoId')
  this.registrationservice.getDipoById(this.dipoId).subscribe(ref =>{
  console.log(ref)
  this.diponame[0]=ref;
})
  }
  delete(routeId:any){
    if(confirm("Are you sure ..?"))
    {
      this.registrationservice.deleteroute(routeId).then(
        ()=>(error:any)=>console.error(error)
      )
    }
  }
}

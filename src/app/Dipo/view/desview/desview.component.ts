import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';
import {Router } from '@angular/router';
@Component({
  selector: 'app-desview',
  templateUrl: './desview.component.html',
  styleUrls: ['./desview.component.scss']
})
export class DesviewComponent implements OnInit {
  public deslist: any[]=[]
  public diponame: any[]=[]
  dipoId:any;
  constructor(private router:Router,private registrationservice:RegistrationService ) { }

  ngOnInit(): void {
    this.dipoId=localStorage.getItem('dipoId')
    this.registrationservice.getdes1(this.dipoId).subscribe(ref =>{
    console.log(ref)
    this.deslist=ref;
  })
  this.dipoId=localStorage.getItem('dipoId')
  this.registrationservice.getDipoById(this.dipoId).subscribe(ref =>{
  console.log(ref)
  this.diponame[0]=ref;
})
  }
  delete(destinationId:any){
    if(confirm("Are you sure ..?"))
    {
      this.registrationservice.deletedes(destinationId).then(
        ()=>(error:any)=>console.error(error)
      )
    }
  }
}

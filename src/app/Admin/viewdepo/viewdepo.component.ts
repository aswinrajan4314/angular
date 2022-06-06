import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-viewdepo',
  templateUrl: './viewdepo.component.html',
  styleUrls: ['./viewdepo.component.scss']
})
export class ViewdepoComponent implements OnInit {
  public depolist: any[]=[]
  constructor(private router:Router,private registrationservice:RegistrationService) { }

  ngOnInit(): void {
    this.registrationservice.getdepo().subscribe(ref =>{
      console.log(ref)
      this.depolist=ref;
    })
  }

  delete(dipotId:any){
    if(confirm("Are you sure ..?"))
    {
      this.registrationservice.deletedepo(dipotId).then(
        ()=>(error:any)=>console.error(error)
      )
    }
  }

}

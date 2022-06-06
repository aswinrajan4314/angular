import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';
import {Router } from '@angular/router';
@Component({
  selector: 'app-viewdistrict',
  templateUrl: './viewdistrict.component.html',
  styleUrls: ['./viewdistrict.component.scss']
})
export class ViewdistrictComponent implements OnInit {
 public districtlist: any[]=[]
  constructor( 
    private router:Router,private registrationservice:RegistrationService ) { }

  ngOnInit(): void {
    this.registrationservice.getdistrict().subscribe(ref =>{
      console.log(ref)
      this.districtlist=ref;
    })
  }

  delete(districtId:any){
    if(confirm("Are you sure ..?"))
    {
      this.registrationservice.deletedistrict(districtId).then(
        ()=>(error:any)=>console.error(error)
      )
    }
  }
  
}

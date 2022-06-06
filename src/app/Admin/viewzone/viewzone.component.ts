import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-viewzone',
  templateUrl: './viewzone.component.html',
  styleUrls: ['./viewzone.component.scss']
})
export class ViewzoneComponent implements OnInit {
  public zonelist: any[]=[]
  constructor( private router:Router,private registrationservice:RegistrationService) { }

  ngOnInit(): void {
    this.registrationservice.getzone().subscribe(ref =>{
      console.log(ref)
      this.zonelist=ref;
    })
    }
    delete(zoneId:any){
      if(confirm("Are you sure ..?"))
      {
        this.registrationservice.deletezone(zoneId).then(
          ()=>(error:any)=>console.error(error)
        )
      }
    }
}

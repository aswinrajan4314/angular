import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';
import {Router } from '@angular/router';
@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.scss']
})
export class ViewstudentComponent implements OnInit {
  public diponame: any[]=[]
  public  applist:any[]=[];
  dipoId:any;
  constructor(private router:Router,private registrationservice:RegistrationService) { }

  ngOnInit(): void {
    this.dipoId=localStorage.getItem('dipoId')
this.registrationservice.getDipoById(this.dipoId).subscribe(ref =>{
console.log(ref)
this.diponame[0]=ref;
})

this.dipoId=localStorage.getItem('dipoId')
  this.registrationservice.getapp(this.dipoId).subscribe(ref =>{
    console.log(ref)
    this.applist=ref;
  })

  }

//   onview(studentid:any){
// this.router.navigate(['/printstudent',studentid])
//   }

}

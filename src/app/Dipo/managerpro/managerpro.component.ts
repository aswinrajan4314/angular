import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-managerpro',
  templateUrl: './managerpro.component.html',
  styleUrls: ['./managerpro.component.scss']
})
export class ManagerproComponent implements OnInit {
  dipoId:any;
  public diponame: any[]=[]
  constructor(private fb:FormBuilder,
    private registrationservice:RegistrationService,
    private route:ActivatedRoute,
    private router:Router ) { }

  ngOnInit(): void {
    this.dipoId=localStorage.getItem('dipoId')
    this.registrationservice.getDipoById(this.dipoId).subscribe(ref =>{
    console.log(ref)
    this.diponame[0]=ref;
  })
  }

}

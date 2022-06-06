import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-routereg',
  templateUrl: './routereg.component.html',
  styleUrls: ['./routereg.component.scss']
})
export class RouteregComponent implements OnInit {
  routeform!:FormGroup
  public diponame: any[]=[]
  dipoId:any;
  savestatus=false;
  alert:boolean=false;
  constructor(private fb:FormBuilder,
    private registrationservice:RegistrationService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {this.routeform=this.fb.group({
    route:['',Validators.required],
    dipoId:localStorage.getItem('dipoId')
    
  })
  this.dipoId=localStorage.getItem('dipoId')
  this.registrationservice.getDipoById(this.dipoId).subscribe(ref =>{
  console.log(ref)
  this.diponame[0]=ref;
})
  }


  get f(){return this.routeform.controls;}

  submit(){

    if(!this.routeform.valid){
      this.savestatus=true
      return
    }

   else{
    this.registrationservice.addroute(this.routeform.value).then(()=>{
      // this.router.navigate([''])
    });
    this.alert=true
    this.routeform.reset({})
  }
  }
}

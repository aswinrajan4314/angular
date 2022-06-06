import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.scss']
})
export class BusComponent implements OnInit {
busform!:FormGroup
public diponame: any[]=[]
dipoId:any;
alert:boolean=false;
savestatus=false;

  constructor(private fb:FormBuilder,
    private registrationservice:RegistrationService,
    private route:ActivatedRoute,
    private router:Router ) { }

  ngOnInit(): void {
    this.busform=this.fb.group({
    bus_no:['',Validators.required],
    type:['',Validators.required],
    dipoId:localStorage.getItem('dipoId')
  })

  this.dipoId=localStorage.getItem('dipoId')
  this.registrationservice.getDipoById(this.dipoId).subscribe(ref =>{
  console.log(ref)
  this.diponame[0]=ref;
})

  }

  get f(){return this.busform.controls;}

  submit(){
    if(!this.busform.valid){
      this.savestatus=true
      return
    }  

    else{
    this.registrationservice.addbus(this.busform.value).then(()=>{
      // this.router.navigate([''])
    });
    this.alert=true
    this.busform.reset({})
  }
}
}

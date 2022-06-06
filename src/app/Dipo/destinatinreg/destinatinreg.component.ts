import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-destinatinreg',
  templateUrl: './destinatinreg.component.html',
  styleUrls: ['./destinatinreg.component.scss']
})
export class DestinatinregComponent implements OnInit {
  desform!:FormGroup
  public diponame: any[]=[]
  dipoId:any;
  savestatus=false;
  alert:boolean=false;
  constructor(private fb:FormBuilder,
    private registrationservice:RegistrationService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {this.desform=this.fb.group({
    destination:['',Validators.required],
    dipoId:localStorage.getItem('dipoId')
 
  })
  this.dipoId=localStorage.getItem('dipoId')
  this.registrationservice.getDipoById(this.dipoId).subscribe(ref =>{
  console.log(ref)
  this.diponame[0]=ref;
})
  }
  get f(){return this.desform.controls;}



  submit(){
    if(!this.desform.valid){
      this.savestatus=true
      return
    } 
    else{
    this.registrationservice.adddes(this.desform.value).then(()=>{
      // this.router.navigate([''])
    });
    this.alert=true
    this.desform.reset({})
       }
  }
}

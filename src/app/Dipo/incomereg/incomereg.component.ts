import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-incomereg',
  templateUrl: './incomereg.component.html',
  styleUrls: ['./incomereg.component.scss']
})
export class IncomeregComponent implements OnInit {
  incomeform!:FormGroup;
  public diponame: any[]=[]
  dipoId:any;
  savestatus=false;
  alert:boolean=false;


  constructor(private fb:FormBuilder,
    private registrationservice:RegistrationService,
    private route:ActivatedRoute,
    private router:Router                                
) { }

  ngOnInit(): void {

    this.incomeform=this.fb.group({
      date:['',Validators.required],
      details:['',Validators.required],
      totalincome:['',Validators.required],
      dipoId:localStorage.getItem('dipoId')
    })
    this.dipoId=localStorage.getItem('dipoId')
    this.registrationservice.getDipoById(this.dipoId).subscribe(ref =>{
    console.log(ref)
    this.diponame=ref;
  })



  }

  get f(){return this.incomeform.controls;}

  submit(){

    if(!this.incomeform.valid){
      this.savestatus=true
      return
    } 

    else{
    this.registrationservice.addincome(this.incomeform.value,this.diponame).then(()=>{
      this.router.navigate(['/incomeview'])
    });
    this.alert=true
    this.incomeform.reset({})
       }
  }

}

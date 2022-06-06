import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-expensereg',
  templateUrl: './expensereg.component.html',
  styleUrls: ['./expensereg.component.scss']
})
export class ExpenseregComponent implements OnInit {
 expenseform!:FormGroup;
 public diponame: any[]=[]
 dipoId:any;
 savestatus=false;
 alert:boolean=false;

  constructor(private fb:FormBuilder,
    private registrationservice:RegistrationService,
    private route:ActivatedRoute,
    private router:Router  ) { }

  ngOnInit(): void {
   
    this.expenseform=this.fb.group({
      date:['',Validators.required], 
      details:['',Validators.required],
      totalexpense:['',Validators.required],
      dipoId:localStorage.getItem('dipoId')
    })
    this.dipoId=localStorage.getItem('dipoId')
    this.registrationservice.getDipoById(this.dipoId).subscribe(ref =>{
    this.diponame=ref;
    console.log(this.diponame)

  })
  }
  get f(){return this.expenseform.controls;}

  submit(){
    if(!this.expenseform.valid){
      this.savestatus=true
      return
    } 
    else{
    this.registrationservice.addexpense(this.expenseform.value,this.diponame).then(()=>{
      this.router.navigate(['/expenseview'])
    });
    this.alert=true
    this.expenseform.reset({})
       }
  }

 
}

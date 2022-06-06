import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-dipotreg',
  templateUrl: './dipotreg.component.html',
  styleUrls: ['./dipotreg.component.scss']
})
export class DipotregComponent implements OnInit {
  dipotform!:FormGroup;
  DistrictList:any[]=[];
  zoneList:any[]=[];
  savestatus=false;
  alert:boolean=false;

  constructor(private fb:FormBuilder,
              private registrationservice:RegistrationService,
              private route:ActivatedRoute,
              private router:Router                                 
    ) { }

  ngOnInit(): void {
   
    this.registrationservice.getdistrictlist().subscribe((data:any)=>{
      this.DistrictList = data;
      console.log(data)
    })
    
    this.registrationservice.getzone().subscribe((data:any)=>{
      this.zoneList= data;
      console.log(data)
    })

    this.dipotform=this.fb.group({
      location:['',Validators.required],
      manager_name:['',Validators.required],
      district:['',Validators.required],
      zone:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      user_name:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(4),Validators.maxLength(6)]], 
    })


  }
  get f(){return this.dipotform.controls;}

  submit(){
    if(!this.dipotform.valid){
      this.savestatus=true
      return
    }  
    
else
   { this.registrationservice.adddipot(this.dipotform.value).then(()=>{
     
    })
    this.alert=true
    this.dipotform.reset({})
  }
  }

}

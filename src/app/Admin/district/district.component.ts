import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit {
 districtform!:FormGroup
 savestatus=false;
alert:boolean=false;
 constructor(private fb:FormBuilder,
    private registrationservice:RegistrationService,
    private route:ActivatedRoute,
    private router:Router ) { }

  ngOnInit(): void {
    this.districtform=this.fb.group({
      district:['',Validators.required]
    })
  }

  submit(){
if(!this.districtform.valid){
  this.savestatus=true
  return
}
else
    {
      
      this.registrationservice.adddistrict(this.districtform.value).then(()=>{
      //  alert("inseted sucessfully")
      //  this.router.navigate(['/viewdistrict'])
     
    })
    this.alert=true
    // this.districtform.reset({})
  }
  
  
  }

}

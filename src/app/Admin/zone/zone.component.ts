import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent implements OnInit {
  zoneform!:FormGroup
  savestatus=false;
  alert:boolean=false;
  constructor(private fb:FormBuilder,
    private registrationservice:RegistrationService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {this.zoneform=this.fb.group({
    zone:['',Validators.required]
  })
  }

  submit(){
    if(!this.zoneform.valid){
      this.savestatus=true
      return
    }

else
    {this.registrationservice.addzone(this.zoneform.value).then(()=>{
      this.router.navigate(['/viewzone'])
    }); 
    this.alert=true
    // this.districtform.reset({})
  }
  }

}

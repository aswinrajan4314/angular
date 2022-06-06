import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tripview',
  templateUrl: './tripview.component.html',
  styleUrls: ['./tripview.component.scss'],
})
export class TripviewComponent implements OnInit {
  public triplist: any[] = [];
  public diponame: any[]=[]
  tripcontrol = new FormControl('');
  listtrip: any[] = [];
  dipoId:any;
  alert:boolean=false;
  constructor(
    private router: Router,
    private registrationservice: RegistrationService
  ) {}

  ngOnInit(): void {
    this.dipoId=localStorage.getItem('dipoId')
    this.registrationservice.gettripbydipo(this.dipoId).subscribe((data: any) => {
      this.triplist = data;
      console.log(data);
    });
    this.dipoId=localStorage.getItem('dipoId')
    this.registrationservice.getDipoById(this.dipoId).subscribe(ref =>{
    console.log(ref)
    this.diponame[0]=ref;
  })
    
  }
  

  onChange(event: any) 
  { console.log(this.tripcontrol.value)
     this.registrationservice.gettripbyname(this.tripcontrol.value)
      .subscribe(res => {
         console.log(res)
          this.listtrip = res;
   })
   }

  
  delete(tripId: any) {
    if (confirm('Are you sure ..?')) {
      this.registrationservice.deletetrip(tripId).then(
        () => (error: any) => console.error(error))
    }
  }
  cancel(tripId){
    
    this.registrationservice.gettripcancel(tripId,this.triplist[0])
     .then(res => {
        console.log(res)
        this.alert=false
  })

  }
  allocate(tripId){
    this.registrationservice.gettripallocate(tripId,this.triplist[0])
     .then(res => {
        console.log(res)
        this.alert=true
         
  })

  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-tripreg',
  templateUrl: './tripreg.component.html',
  styleUrls: ['./tripreg.component.scss']
})
export class TripregComponent implements OnInit {
  tripform!:FormGroup;
  public diponame: any[]=[]
  public  buslist:any[]=[];
  public routelist:any[]=[];
  public deslist:any[]=[];
  savestatus=false;
  alert:boolean=false;
 
  dipoId:any;
  constructor(private fb:FormBuilder,
    private registrationservice:RegistrationService,
    private route:ActivatedRoute,
    private router:Router                                 
) { }

  ngOnInit(): void {  
    
    this.dipoId=localStorage.getItem('dipoId')
    this.registrationservice.getroute1(this.dipoId).subscribe(ref =>{
      console.log(ref)
    this.routelist=ref;
  })

  this.dipoId=localStorage.getItem('dipoId')
  this.registrationservice.getdes1(this.dipoId).subscribe(ref =>{
  console.log(ref)
  this.deslist=ref;
})

  this.dipoId=localStorage.getItem('dipoId')
  this.registrationservice.getbus1(this.dipoId).subscribe(ref =>{
    console.log(ref)
    this.buslist=ref;
  })
  

  this.tripform=this.fb.group({
    trip:['',Validators.required],
    bus_no:['',Validators.required],
    time1:[''],
    time2:[''],
    time3:[''],
    time4:[''],
    time5:[''],
    time6:[''],
    route1:[''],route2:[''],route3:[''],route4:[''],route5:[''],
    destination:[''],
    status:['active'],
    dipoId:localStorage.getItem('dipoId')

  })
 
  this.registrationservice.getDipoById(this.dipoId).subscribe(ref =>{
  console.log(ref)
  this.diponame[0]=ref;
})
  }

  get f(){return this.tripform.controls;}

  submit(){
    if(!this.tripform.valid){
      this.savestatus=true
      return
    }  
    
    else{
    this.registrationservice.addtrip(this.tripform.value).then(()=>{
      // this.router.navigate(['/adminmaster/adminhome'])
    });
    this.alert=true
    this.tripform.reset({})
  }
  }

}

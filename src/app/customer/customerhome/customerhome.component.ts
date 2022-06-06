import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-customerhome',
  templateUrl: './customerhome.component.html',
  styleUrls: ['./customerhome.component.scss']
})
export class CustomerhomeComponent implements OnInit {
  searchform!:FormGroup;
  routelist:any[]=[];
  deslist:any[]=[];
  listtrip:any[]=[];
  
  constructor(private fb:FormBuilder,
    private registrationservice:RegistrationService,
    private route:ActivatedRoute,
    private router:Router  ) { }

  ngOnInit(): void {
    // this.registrationservice.getroutelist().subscribe((data:any)=>{
    //   this.routelist = data;
    //   console.log(data)
    // })
    this.registrationservice.getdeslist().subscribe((data:any)=>{
      this.deslist = data;
      console.log(data)
    })
    this.searchform=this.fb.group({
      // from:[''],
      to:[''],
   
    })
  }
  submit(){
    console.log(this.searchform.value)
    this.registrationservice.searchbus(this.searchform.value).subscribe(res =>{
      console.log(res)              
      this.listtrip =res;
    })
  }
}

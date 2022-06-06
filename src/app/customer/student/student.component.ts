import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  public depolist: any[]=[];
  zoneList:any[]=[];
  studentform!:FormGroup;
  public loading= false;
  public choosenFile: any;
  alert:boolean=false;
  

  constructor(private fb:FormBuilder,
    private registrationservice:RegistrationService,
    private route:ActivatedRoute,
    private router:Router  ) { }

  ngOnInit(): void {
    this.registrationservice.getdepo().subscribe(ref =>{
      console.log(ref)
      this.depolist=ref;
    })

    this.registrationservice.getzone().subscribe((data:any)=>{
      this.zoneList= data;
      console.log(data)
    })

    this.studentform=this.fb.group({
      studentname:[],
      institution:[],
      Phone:[],
      dipoId:[],
      from:[],
      to:[],
      status:['0'],
      fileUrl:'',
      
    })
  }
// onsubmit(){
//   { this.registrationservice.addstudent(this.studentform.value).then(()=>{
     
//   })
 
  
// }
// }
uploadFile() {
}

submit() {
  this.loading = true;
  this.registrationservice.upload(this.choosenFile)
  .then(url => {
  if (url) {
  this.studentform.patchValue({
  fileUrl: url
  })
  this.registrationservice.addstudent(this.studentform.value).then(() => {
  this.loading = false;
  this.alert=true
  
  
  });
  } else {
  alert("image upload error")
  }
  })
  .catch(err => {
  this.loading = false;
  console.log(err)
  })
  }
  handleFileInput(event: any) {
  console.log(event.target.files[0])
  this.choosenFile = event.target.files[0]
  }


}

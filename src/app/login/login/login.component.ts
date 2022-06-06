import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import firebase from "firebase/compat/app";
import { MloginService } from 'src/app/services/mlogin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  appUser: firebase.User | undefined ;
  AdminLoginForm!: FormGroup;
  username = new FormControl('');
  password=new FormControl('');
  staffList:any[]=[];
  angularAuth: any;
  managerlogin!:FormGroup;
  musername=new FormControl('');
  mpassword=new FormControl('');
  public valid=false;
  public valid2=false;

  constructor(
    private login:LoginService,
    private mlogin:MloginService,
    private route:ActivatedRoute,
    private fb:FormBuilder,
    private router:Router
  )  {}

  ngOnInit(): void { 
    this.AdminLoginForm = this.fb.group({
      username:[''],
      password:['']

    })
    this.managerlogin=this.fb.group({
      musername:[''],
      mpassword:['']
    })
  }
  
  get f1(){ return this.AdminLoginForm.controls;}
  get f2(){ return this.managerlogin.controls;}
     
  submit(){
    console.log(this.username.value)
    this.login.AdminLogin(this.username.value,this.password.value).subscribe(res =>{
      console.log(res)
      this.staffList =res;
      if(this.staffList.length>0){
        this.router.navigate(['/adminmaster/adminhome']);
      }
      else{this.valid=true;}
    })
  }
  msubmit(){
    console.log(this.musername.value,this.mpassword.value)
   
    this.login.dipologin(this.musername.value,this.mpassword.value).subscribe(res =>{
     
      console.log(res)
      localStorage.setItem('dipoId',res[0].dipoId);
      this.staffList =res;
      if(this.staffList.length>0){
        this.router.navigate(['/dipomaster/dipohome']);
      }
      else{  alert("inseted")}
    })
  }
}

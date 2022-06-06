import { Component, OnInit } from '@angular/core';
import {  FormControl } from '@angular/forms';
import {  Router } from '@angular/router';
import { MloginService } from 'src/app/services/mlogin.service';
@Component({
  selector: 'app-mlogin',
  templateUrl: './mlogin.component.html',
  styleUrls: ['./mlogin.component.scss']
})
export class MloginComponent implements OnInit {
  staffList:any[]=[]; 
  musername=new FormControl('');
  mpassword=new FormControl('');
  constructor(private login:MloginService,
    private router:Router) { }

  ngOnInit(): void {
  }
  msubmit(){
    console.log(this.musername.value)
    this.login.dipologin(this.musername.value,this.mpassword.value).subscribe(res =>{
      console.log(res)
      this.staffList =res;
      if(this.staffList.length>0){
        this.router.navigate(['/adminmaster/adminhome']);
      }
    })
  }}

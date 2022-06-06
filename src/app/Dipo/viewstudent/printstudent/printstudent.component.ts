import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';
import {Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import * as htmlToImage from 'html-to-image';

@Component({
  selector: 'app-printstudent',
  templateUrl: './printstudent.component.html',
  styleUrls: ['./printstudent.component.scss']
})
export class PrintstudentComponent implements OnInit {
  studentId:any
  public diponame: any[]=[]
  public  printlist:any
  dipoId:any;

  generateImage(){
    htmlToImage.toJpeg(document.getElementById('my-node'),{ quality: 1 })
  .then(function (dataUrl) {
    var link = document.createElement('a');
    link.download = 'stcardfront ';
    link.href = dataUrl;
    link.click();
  });
  }
  generateImage2(){
    htmlToImage.toJpeg(document.getElementById('my-node2'), { quality: 1 })
  .then(function (dataUrl) {
    var link = document.createElement('a');
    link.download = 'stcard';
    link.href = dataUrl;
    link.click();
  });
  }

  constructor(private route:ActivatedRoute,private router:Router,private registrationservice:RegistrationService) {route.params.subscribe(proid=>{this.studentId=proid['id'];}) }

  ngOnInit(): void {
    this.registrationservice.getstudentById(this.studentId).subscribe(ref =>{
      console.log(ref)
      this.printlist=ref;
    })
    this.dipoId=localStorage.getItem('dipoId')
    this.registrationservice.getDipoById(this.dipoId).subscribe(ref =>{
    console.log(ref)
    this.diponame[0]=ref;
    })
  }

}

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MloginService {

  constructor(private afs:AngularFirestore,
    private route:ActivatedRoute,
    private fb: FormBuilder,
    private router: Router) { }
  
    dipologin(musername: any, mpassword :any){
      console.log(musername,mpassword)
      debugger
      return this.afs.collection('adminlogin', (ref) => ref.where("username","==",
      musername )
      .where("password","==",mpassword) )
      .valueChanges({ idField: "adminloginId" })
      }
  }

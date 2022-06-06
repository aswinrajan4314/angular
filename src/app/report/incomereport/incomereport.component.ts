import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
 import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-incomereport',
  templateUrl: './incomereport.component.html',
  styleUrls: ['./incomereport.component.scss']
})
export class IncomereportComponent implements OnInit {

stocklist: any[] = [] 
totalamt=0;
public cartlist : any[]=[]; 
value: any[] = [];
public instrumentlist : any[]=[];
dailysales!:FormGroup 
count=0

  constructor(private fb:FormBuilder,
    private registrationservice:RegistrationService,
    private route:ActivatedRoute,
    private router:Router,
    private datepipe:DatePipe) { }

    categoryControl = new FormControl('');
     todateControl= new FormControl('');

  ngOnInit(): void {
    this.dailysales=this.fb.group({
       totalamount:[''], 
  });
  }

  onChange(event: any)
  {
     console.log(this.categoryControl.value,this.todateControl.value) 
     this.registrationservice.getbookingBydate(this.categoryControl.value, 
     this.todateControl.value) 
     .subscribe(res => { console.log(res) 
     this.stocklist = res; 
     this.value=this.stocklist 
     for(let i=0;i<this.stocklist.length;i++){ 
     this.totalamt+=parseInt(this.value[i].totalincome);
     console.log(this.totalamt) }
     this.dailysales.get("totalamount")?.setValue(this.totalamt) }) }

    //  cartSum(){  this.value=this.stocklist
    //    for(let i=0;i<this.stocklist.length;i++){
    //       this.totalamt+=parseInt(this.value[i].totalincome); 
    //       console.log(this.totalamt)
    //      }
    //       console.log(this.totalamt) 
    //     }
  
}

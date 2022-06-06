import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './Admin/adminhome/adminhome.component';
import { AdminmasterComponent } from './Admin/adminmaster/adminmaster.component';
import { DipoeditComponent } from './Admin/dipoedit/dipoedit.component';
import { DipotregComponent } from './Admin/dipotreg/dipotreg.component';
import { DistrictComponent } from './Admin/district/district.component';
import { ViewdepoComponent } from './Admin/viewdepo/viewdepo.component';
import { ViewdistrictComponent } from './Admin/viewdistrict/viewdistrict.component';
import { ViewzoneComponent } from './Admin/viewzone/viewzone.component';
import { ZoneComponent } from './Admin/zone/zone.component';
import { CustomerhomeComponent } from './customer/customerhome/customerhome.component';
import { CustomermasterComponent } from './customer/customermaster/customermaster.component';
import { StudentComponent } from './customer/student/student.component';
import { TrailComponent } from './customer/trail/trail.component';
import { BusComponent } from './Dipo/bus/bus.component';
import { DestinatinregComponent } from './Dipo/destinatinreg/destinatinreg.component';
import { DipohomeComponent } from './Dipo/dipohome/dipohome.component';
import { DipomasterComponent } from './Dipo/dipomaster/dipomaster.component';
import { ExpenseregComponent } from './Dipo/expensereg/expensereg.component';
import { IncomeregComponent } from './Dipo/incomereg/incomereg.component';
import { ManagerproComponent } from './Dipo/managerpro/managerpro.component';
import { RouteregComponent } from './Dipo/routereg/routereg.component';
import { TripregComponent } from './Dipo/tripreg/tripreg.component';
import { BusviewComponent } from './Dipo/view/busview/busview.component';
import { DesviewComponent } from './Dipo/view/desview/desview.component';
import { ExpenseviewComponent } from './Dipo/view/expenseview/expenseview.component';
import { IncomeviewComponent } from './Dipo/view/incomeview/incomeview.component';
import { RouteviewComponent } from './Dipo/view/routeview/routeview.component';
import { TripviewComponent } from './Dipo/view/tripview/tripview.component';
import { PrintstudentComponent } from './Dipo/viewstudent/printstudent/printstudent.component';
import { ViewstudentComponent } from './Dipo/viewstudent/viewstudent.component';

import { GuesthomeComponent } from './Guest/guesthome/guesthome.component';
import { GuestmasterComponent } from './Guest/guestmaster/guestmaster.component';
import { LoginComponent } from './login/login/login.component';
import { MloginComponent } from './login/mlogin/mlogin.component';
import { ExpensereportComponent } from './report/expensereport/expensereport.component';
import { IncomereportComponent } from './report/incomereport/incomereport.component';


const routes: Routes = [
  {path:'',redirectTo:'/guestmaster/guesthome',pathMatch:'full'},
  
  {path:'guestmaster',component:GuestmasterComponent,
  
  children:[

    {path:'guesthome',component:GuesthomeComponent},
  ]},



  {path:'adminmaster',component:AdminmasterComponent,
  
children:[

  {path:'adminhome',component:AdminhomeComponent},

]},
 {path:'login',component:LoginComponent},
 
 {path:'guestmaster',component:GuestmasterComponent,
children:[
  {path:'loogin',component:LoginComponent},
]
 },


{path:'dipotreg',component:DipotregComponent},

{path:'viewdistrict',component:ViewdistrictComponent},


{path:'viewdepo',component:ViewdepoComponent},



{path:'districreg',component:DistrictComponent},
{path:'zonereg',component:ZoneComponent},
{path:'viewzone',component:ViewzoneComponent},



{path:'dipomaster',component:DipomasterComponent,
children:[
  {path:'dipohome',component:DipohomeComponent},
]},

{path:'customermaster',component:CustomermasterComponent,
children:[
  {path:'customerhome',component:CustomerhomeComponent},
]},

{path:'mlogin',component:MloginComponent},



{path:'busreg',component:BusComponent},
{path:'viewbus',component:BusviewComponent},

{path:'desreg',component:DestinatinregComponent},
{path:'viewdes',component:DesviewComponent},
{path:'routereg',component:RouteregComponent},
{path:'viewroute',component:RouteviewComponent},
{path:'tripreg',component:TripregComponent},
{path:'viewtrip',component:TripviewComponent},
{path:'incomereg',component:IncomeregComponent},
{path:'expensereg',component:ExpenseregComponent},
{path:'expenseview',component:ExpenseviewComponent},
{path:'incomeview',component:IncomeviewComponent},
{path:'trail',component:TrailComponent},
{path:'depoedit',component:DipoeditComponent},
{path:'profile',component:ManagerproComponent},
{path:'incomereport',component:IncomereportComponent},
{path:'expensereport',component:ExpensereportComponent},
{path:'viewstudent',component:ViewstudentComponent},
{path:'printstudent/:id',component:PrintstudentComponent},
{path:'customermaster',component:CustomermasterComponent,
children:[
  {path:'student',component:StudentComponent},
]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuesthomeComponent } from './Guest/guesthome/guesthome.component';
import { AdminhomeComponent } from './Admin/adminhome/adminhome.component';
import { DipohomeComponent } from './Dipo/dipohome/dipohome.component';
import { GuestmasterComponent } from './Guest/guestmaster/guestmaster.component';
import { AdminmasterComponent } from './Admin/adminmaster/adminmaster.component';
import { LoginComponent } from './login/login/login.component';
import { FormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DipotregComponent } from './Admin/dipotreg/dipotreg.component';
import { DipomasterComponent } from './Dipo/dipomaster/dipomaster.component';
import { DistrictComponent } from './Admin/district/district.component';
import { ViewdistrictComponent } from './Admin/viewdistrict/viewdistrict.component';
import { ZoneComponent } from './Admin/zone/zone.component';
import { ViewzoneComponent } from './Admin/viewzone/viewzone.component';
import { MloginComponent } from './login/mlogin/mlogin.component';
import { BusComponent } from './Dipo/bus/bus.component';
import { BusviewComponent } from './Dipo/view/busview/busview.component';
import { DestinatinregComponent } from './Dipo/destinatinreg/destinatinreg.component';
import { DesviewComponent } from './Dipo/view/desview/desview.component';
import { RouteregComponent } from './Dipo/routereg/routereg.component';
import { RouteviewComponent } from './Dipo/view/routeview/routeview.component';
import { TripregComponent } from './Dipo/tripreg/tripreg.component';
import { TripviewComponent } from './Dipo/view/tripview/tripview.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { IncomeregComponent } from './Dipo/incomereg/incomereg.component';
import { ExpenseregComponent } from './Dipo/expensereg/expensereg.component';
import { ExpenseviewComponent } from './Dipo/view/expenseview/expenseview.component';
import { IncomeviewComponent } from './Dipo/view/incomeview/incomeview.component';
import { CustomermasterComponent } from './customer/customermaster/customermaster.component';
import { CustomerhomeComponent } from './customer/customerhome/customerhome.component';
import { TrailComponent } from './customer/trail/trail.component';
import { ViewdepoComponent } from './Admin/viewdepo/viewdepo.component';
import { DipoeditComponent } from './Admin/dipoedit/dipoedit.component';
import { ManagerproComponent } from './Dipo/managerpro/managerpro.component';
import { IncomereportComponent } from './report/incomereport/incomereport.component';
import { ExpensereportComponent } from './report/expensereport/expensereport.component';
import { DatePipe } from '@angular/common';
import { StudentComponent } from './customer/student/student.component';
import { ViewstudentComponent } from './Dipo/viewstudent/viewstudent.component';
import { PrintstudentComponent } from './Dipo/viewstudent/printstudent/printstudent.component';




@NgModule({
  declarations: [
    AppComponent,
    GuesthomeComponent,
    AdminhomeComponent,
    DipohomeComponent,
    GuestmasterComponent,
    AdminmasterComponent,
    LoginComponent,
   
    DipotregComponent,
    DipomasterComponent,
    DistrictComponent,
    ViewdistrictComponent,
    ZoneComponent,
    ViewzoneComponent,
    MloginComponent,
    BusComponent,
    BusviewComponent,
    DestinatinregComponent,
    DesviewComponent,
    RouteregComponent,
    RouteviewComponent,
    TripregComponent,
    TripviewComponent,
    IncomeregComponent,
    ExpenseregComponent,
    ExpenseviewComponent,
    IncomeviewComponent,
    CustomermasterComponent,
    CustomerhomeComponent,
    TrailComponent,
    ViewdepoComponent,
    DipoeditComponent,
    ManagerproComponent,
    IncomereportComponent,
    ExpensereportComponent,
    StudentComponent,
    ViewstudentComponent,
    PrintstudentComponent,

 
   
  
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgApexchartsModule,
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

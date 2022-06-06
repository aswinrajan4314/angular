import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import {AngularFireStorage} from '@angular/fire/compat/storage'

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}
  adddipot(dipotdata: any) {
    const Dipotdata = JSON.parse(JSON.stringify(dipotdata));
    return this.afs.collection('dipot').add(Dipotdata);
  }
  addstudent(dipotdata: any) {
    const Dipotdata = JSON.parse(JSON.stringify(dipotdata));
    return this.afs.collection('student').add(Dipotdata);
  }
  upload(file: any) {
    const path = `Images/${Date.now()}_${file.name}`;
    const ref = this.storage.ref(path);
    const task = this.storage.upload(path, file);
    return new Promise((resolve, reject) => {
      task.then(async (res) => {
        res.ref.getDownloadURL()
          .then(url => {
            console.log(url)
            resolve(url);
          })
          .catch((err) => {
            console.log(err.message_);
            reject(err.code_)
          })
      })
        .catch((err) => {
          console.log(err.message_);
          reject(err.code_)
        })
    })
  }


  getdepo() {
    return this.afs
      .collection('dipot', (ref) => ref.orderBy('district'))
      .valueChanges({ idField: 'dipotId' });
  }
  deletedepo(dipotId: string) {
    return this.afs.doc('dipot/' + dipotId).delete();
  }

  adddistrict(districtdata: any) {
    const Districtdata = JSON.parse(JSON.stringify(districtdata));
    return this.afs.collection('district').add(Districtdata);
  }

  getdistrict() {
    return this.afs
      .collection('district', (ref) => ref.orderBy('district'))
      .valueChanges({ idField: 'districtId' });
  }

  deletedistrict(districtId: string) {
    return this.afs.doc('district/' + districtId).delete();
  }

  getdistrictlist() {
    return this.afs
      .collection<any>('district')
      .snapshotChanges()
      .pipe(
        map((item: any) => {
          const disData: any[] = [];
          if (item) {
            console.log(item);
            item.forEach((el: any) => {
              disData.push({
                id: el.payload.doc.id,
                ...el.payload.doc.data(),
              });
            });
          }
          return disData;
        })
      );
  }
  getzonelist() {
    return this.afs
      .collection<any>('zone')
      .snapshotChanges()
      .pipe(
        map((item: any) => {
          const zonData: any[] = [];
          if (item) {
            console.log(item);
            item.forEach((el: any) => {
              zonData.push({
                id: el.any.doc.id,
                ...el.any.doc.data(),
              });
            });
          }
          return zonData;
        })
      );
  }

  addzone(zonedata: any) {
    const Zonedata = JSON.parse(JSON.stringify(zonedata));
    return this.afs.collection('zone').add(Zonedata);
  }

  getzone() {
    return this.afs
      .collection('zone', (ref) => ref.orderBy('zone'))
      .valueChanges({ idField: 'zoneId' });
  }

  deletezone(zoneId: string) {
    return this.afs.doc('zone/' + zoneId).delete();
  }
  addbus(busdata: any) {
    const Busdata = JSON.parse(JSON.stringify(busdata));
    return this.afs.collection('bus').add(Busdata);
  }
  getbus() {
    return this.afs
      .collection('bus', (ref) => ref.orderBy('bus_no'))
      .valueChanges({ idField: 'busId' });
  }
  getbus1(dipoId: any) {
    console.log(dipoId);
    return this.afs
      .collection('bus', (ref) => ref.where('dipoId', '==', dipoId))
      .valueChanges({ idField: 'busId' });
  }
  deletebus(busId: string) {
    return this.afs.doc('bus/' + busId).delete();
  }
  adddes(desdata: any) {
    const Desdata = JSON.parse(JSON.stringify(desdata));
    return this.afs.collection('destination').add(Desdata);
  }
  getdes() {
    return this.afs
      .collection('destination', (ref) => ref.orderBy('destination'))
      .valueChanges({ idField: 'destinationId' });
  }
  getdes1(dipoId: any) {
    return this.afs
      .collection('destination', (ref) => ref.where('dipoId', '==', dipoId))
      .valueChanges({ idField: 'destinationId' });
  }
  deletedes(destinationId: string) {
    return this.afs.doc('destination/' + destinationId).delete();
  }
  addroute(desdata: any) {
    const Desdata = JSON.parse(JSON.stringify(desdata));
    return this.afs.collection('route').add(Desdata);
  }
  getroute() {
    return this.afs
      .collection('route', (ref) => ref.orderBy('route'))
      .valueChanges({ idField: 'routeId' });
  }
  getroute1(dipoId: any) {
    return this.afs
      .collection('route', (ref) => ref.where('dipoId', '==', dipoId))
      .valueChanges({ idField: 'routeId' });
  }
  deleteroute(routeId: string) {
    return this.afs.doc('route/' + routeId).delete();
  }

  getroutelist() {
    return this.afs
      .collection<any>('route')
      .snapshotChanges()
      .pipe(
        map((item: any) => {
          const routeData: any[] = [];
          if (item) {
            console.log(item);
            item.forEach((el: any) => {
              routeData.push({
                id: el.payload.doc.id,
                ...el.payload.doc.data(),
              });
            });
          }
          return routeData;
        })
      );
  }

  getdeslist() {
    return this.afs
      .collection<any>('destination')
      .snapshotChanges()
      .pipe(
        map((item: any) => {
          const desData: any[] = [];
          if (item) {
            console.log(item);
            item.forEach((el: any) => {
              desData.push({
                id: el.payload.doc.id,
                ...el.payload.doc.data(),
              });
            });
          }
          return desData;
        })
      );
  }
  addtrip(desdata: any) {
    const Desdata = JSON.parse(JSON.stringify(desdata));
    return this.afs.collection('trip').add(Desdata);
  }
  gettrip() {
    return this.afs
      .collection('trip', (ref) => ref.orderBy('trip'))
      .valueChanges({ idField: 'tripId' });
  }
  gettripbydipo(dipoId: any) {
    return this.afs
      .collection('trip', (ref) => ref.where('dipoId', '==', dipoId))
      .valueChanges({ idField: 'tripId' });
  }
  gettripbyname(tripId: any) {
    return this.afs
      .collection('trip', (ref) => ref.where('trip', '==', tripId))
      .valueChanges({ idField: 'trip' });
  }
  deletetrip(tripId: string) {
    return this.afs.doc('trip/' + tripId).delete();
  }

  addincome(incomedata: any, dipodetails: any) {
    const Incomedata = {
      date: incomedata.date,
      details: incomedata.details,
      totalincome: incomedata.totalincome,
      dipoId: incomedata.dipoId,

      district: dipodetails.district,
      location: dipodetails.location,
      manager_name: dipodetails.manager_name,
      zone: dipodetails.zone,
    };
    console.log(Incomedata);
    return this.afs.collection('income').add(Incomedata);
  }
  addexpense(expensedata: any, dipodetails) {
    const Exdata = {
      date: expensedata.date,
      details: expensedata.details,
      totalexpense: expensedata.totalexpense,
      dipoId: expensedata.dipoId,

      district: dipodetails.district,
      location: dipodetails.location,
      manager_name: dipodetails.manager_name,
      zone: dipodetails.zone,
    };
    console.log(Exdata);

    return this.afs.collection('expense').add(Exdata);
  }
  getexpense(dipoId: any) {
    console.log(dipoId);
    return this.afs
      .collection('expense', (ref) => ref.where('dipoId', '==', dipoId))
      .valueChanges({ idField: 'expenseId' });
  }
  getincome(dipoId: any) {
    console.log(dipoId);
    return this.afs
      .collection('income', (ref) => ref.where('dipoId', '==', dipoId))
      .valueChanges({ idField: 'incomeId' });
  }

  getdiponame(dipoId: any) {
    console.log(dipoId);
    return this.afs
      .collection('dipot')
      .doc(dipoId)
      .valueChanges({ idField: 'dipoId' });
  }

  getdiponame1() {
    return this.afs
      .collection('dipot', (ref) => ref.orderBy('manager_name'))
      .valueChanges({ idField: 'dipotId' });
  }
  getDipoById(dipoId: any) {
    const dipoData = this.afs.doc<any>('dipot/' + dipoId).valueChanges();

    return dipoData;
  }
  getstudentById(dipoId: any) {
    const dipoData = this.afs.doc<any>('student/' + dipoId).valueChanges();

    return dipoData;
  }


  searchbus(form: any) {
    console.log(form);

    return this.afs
      .collection('trip', (ref) => ref.where('destination', '==', form.to))
      .valueChanges({ idField: 'tripId' });
  }

  getbookingBydate(catId: any, todate: any) {
    console.log("catId");
    console.log(catId);
    console.log("todate");
    console.log(todate);
    return this.afs
      .collection('income', (ref) => ref.where('date', '>=', catId).where('date', '<=', todate))
      .valueChanges({ idField: 'incomeId' });
  }


  getapp(dipoId: any) {
    console.log(dipoId);
    return this.afs
      .collection('student', (ref) => ref.where('dipoId', '==', dipoId).where('status','==','0'))
      .valueChanges({ idField: 'studentId' });
  }

  getexpenseBydate(catId: any, todate: any) {
    console.log("catId");
    console.log(catId);
    console.log("todate");
    console.log(todate);
    return this.afs
      .collection('expense', (ref) => ref.where('date', '>=', catId).where('date', '<=', todate))
      .valueChanges({ idField: 'expenseId' });
  }
  gettripcancel(tripId:any,triplist:any){
    const tripdata={
      status:'cancelled'
    }
    return this.afs.doc("trip/" + tripId).update(tripdata);

  }
  gettripallocate(tripId:any,triplist:any){
    const tripdata={
      status:'active'
    }
    return this.afs.doc("trip/" + tripId).update(tripdata);

  }

}

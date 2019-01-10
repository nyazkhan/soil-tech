import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { Upload } from './upload';
// import { Observable } from 'rxjs';
import { FirebaseListObservable } from '@angular/fire/database-deprecated';
import { Observable } from 'rxjs';
export interface Form {
  name: string;
  email: string;
  contectNo: number;
  message: string;
}


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  db: any;
  task: any;

  clientCollection: any;
  private FormDoc: AngularFirestoreDocument<Form>;
  FormDetail: Observable<Form>;
  constructor(private afs: AngularFirestore) {
    this.clientCollection = afs.collection('soilTech');
        this.db = afs;
  }



  getAllCollection() {
    return this.clientCollection.snapshotChanges();
  }

  addClient(client) {
    return this.clientCollection.add(Object.assign({}, client));
}
upload(event) {
  const randomId = Math.random().toString(36).substring(2);
   this.task =  firebase.storage().ref(randomId).put(event.target.files[0]);
  // let uploadProgress = this.task.percentageChanges();
// console.log( this.task.downloadURL());

}
}

//   update(contactFormDetails: Form) {
//     this.FormDoc.update(contactFormDetails);
//   }
// }
  // contectDetails: any;
  // db: AngularFirestore;
  // private basePath = '/soilTech';
  // uploads: FirebaseListObservable<Upload[]>;

  // constructor(db: AngularFirestore, public db1: AngularFireDatabase) {
  //   db.firestore.settings({ timestampsInSnapshots: true });
  //   this.contectDetails = db.collection('soilTech');
  //   this.db = db;
  // }

  // showImages() {
  //   const storageRef = firebase.storage().ref();
  //   const starsRef = storageRef.child('soilTech');

  //   starsRef.getDownloadURL().then(function (url) {
  //     console.log(url);
  //     // Insert url into an <img> tag to "download"
  //   }).catch(function (error) {

  //   });

  // }

  // pushUpload(upload: Upload) {
  //   const storageRef = firebase.storage().ref();
  //   const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

  //   uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
  //     (snapshot) => {
  //       // upload in progress
  //       upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
  //     },
  //     (error) => {
  //       // upload failed
  //       console.log(error);
  //     },
  //     () => {
  //       // upload success
  //       upload.url = uploadTask.snapshot.downloadURL;
  //       upload.name = upload.file.name;
  //       this.saveFileData(upload);
  //     }
  //   );
  // }



  // // Writes the file details to the realtime db
  // private saveFileData(upload: Upload) {
  //   this.db1.list(`${this.basePath}/`).push(upload);
  // }


  // deleteUpload(upload: Upload) {
  //   this.deleteFileData(upload.$key)
  //     .then(() => {
  //       this.deleteFileStorage(upload.name);
  //     })
  //     .catch(error => console.log(error));
  // }

  // // Deletes the file details from the realtime db
  // private deleteFileData(key: string) {
  //   return this.db1.list(`${this.basePath}/`).remove(key);
  // }

  // // Firebase files must have unique names in their respective storage dir
  // // So the name serves as a unique key
  // private deleteFileStorage(name: string) {
  //   const storageRef = firebase.storage().ref();
  //   storageRef.child(`${this.basePath}/${name}`).delete();
  // }




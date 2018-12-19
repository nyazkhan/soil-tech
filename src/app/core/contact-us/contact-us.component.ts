import { Component, OnInit, Inject } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';
import { FirebaseApp } from '@angular/fire';
export class FormDetails {
  name: string;
  email: string;
  contectNo: number;
  message: string;
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contact = new FormDetails();
  constructor(private firbse: FirebaseService, @Inject(FirebaseApp) firebaseApp: any) { }

  ngOnInit() {
  }
  saveDetails(data) {
    console.log(data);

    this.firbse.db.collection('soilTech').add(Object.assign({}, data)).then(function () {
      console.log('Document successfully written!');
    }).then((details) => {
      this.contact = new FormDetails();
    });
  }
}

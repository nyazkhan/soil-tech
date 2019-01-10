import { Component, OnInit, Inject } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';
import { FormDetails } from 'src/app/providers/contactForm';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contact = new FormDetails();
  constructor(private firbse: FirebaseService) { }

  ngOnInit() {
  }
  uploadFile(event) {
    this.firbse.upload(event);
    // .then(function () {

    // }).then(() => {

    // });
  }


  saveDetails() {
    console.log(this.contact);

    this.firbse.addClient(this.contact).then(function () {

    }).then(() => {
      this.contact = new FormDetails();
    });
  }
}

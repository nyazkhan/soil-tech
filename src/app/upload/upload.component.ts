import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Upload } from '../upload';
import _ from 'lodash';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {


  selectedFiles: FileList;
  currentUpload: Upload;

  constructor(private upSvc: FirebaseService) { }



  ngOnInit() { }


  saveDetails(g) {

  }
}
    // this.upSvc.showImages();
  // }
  // detectFiles(event) {
  //   this.selectedFiles = event.target.files;
  // }

  // uploadSingle() {
  //   const file = this.selectedFiles.item(0);
  //   this.currentUpload = new Upload(file);
  //   this.upSvc.pushUpload(this.currentUpload);
  // }

  // uploadMulti() {
  //   const files = this.selectedFiles;
  //   const filesIndex = _.range(files.length);
  //   _.each(filesIndex, (idx: any) => {
  //     this.currentUpload = new Upload(files[idx]);
  //     this.upSvc.pushUpload(this.currentUpload);
  //   }
  //   );
  // }

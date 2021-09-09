import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../appServices/api.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class HttpComponent implements OnInit {
  myFormData!: FormGroup;
  File!: any;
  url: any;
  dataToSendApi = {
    title: '',
    image1: '',
    image2: '',
  };

  constructor(
    private _api: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myFormData = this.fb.group({
      title: '',
    });
  }

  onSubmit() {
    this.dataToSendApi.title = this.myFormData.value?.title;
    this._api.setTitle(this.myFormData.value?.title);
    this.dataToSendApi.image1 = this.url;
    this.dataToSendApi.image2 = this.url;

    this.router.navigate(['api-content']);

    this._api.saveData(this.dataToSendApi).subscribe((res) => {
      console.log(res);
    });
    // this._api.uploadToAssets(this.File);
  }

  //upload files
  selectFile(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      return;
    }
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    // this.File = event.target.files[0];
    reader.onload = (_event) => {
      this.url = reader.result;
      // console.log(this.url);

      if (this._api.getImage1Url() == 'null') {
        this._api.setImage1Url(this.url); //sending images to service
        console.log('Img1');
      } else {
        this._api.setImage2Url(this.url);
        console.log('Img2');
      }
    };
  }
}

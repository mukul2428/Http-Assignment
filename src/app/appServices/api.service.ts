import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  Title = '';
  Image1Url = "null";
  Image2Url = "null";
  constructor(private _http: HttpClient) {}

  getPhotos() {
    return this._http.get('https://jsonplaceholder.typicode.com/photos');
  }

  saveData(data: any): Observable<any> {
    return this._http.post('https://jsonplaceholder.typicode.com/photos', data);
  }

  getTitle(){
    return this.Title;
  }
  setTitle(title: string) {
    this.Title = title;
  }
  getImage1Url() {
    return this.Image1Url;
  }
  setImage1Url(url: string) {
    this.Image1Url = url;
  }
  getImage2Url() {
    return this.Image2Url;
  }
  setImage2Url(url: string) {
    this.Image2Url = url;
  }

  // BUCKET = 'http://localhost:4200';

  // s3 = new AWS.S3({
  //   apiVersion: '2006-03-01',
  //   params: { Bucket: this.BUCKET },
  // });

  // uploadToAssets(file: File) {
  //   this.s3.upload({
  //     Bucket: 'bucket',
  //     Key: 'assets/' + file.name,
  //     Body: file,
  //   }, (err, data) => {
  //      console.log(err, data); // this will tell you if it went ok or not
  //   });
  //   console.log("hdj");
  // }
}

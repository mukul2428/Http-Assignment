import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../appServices/api.service';

@Component({
  selector: 'app-api-content',
  templateUrl: './api-content.component.html',
  styleUrls: ['./api-content.component.css'],
})
export class ApiContentComponent implements OnInit {
  getApiImage: any;
  apiContent = [
    {
      title: '',
      image1: '',
      image2: '',
    },
  ];
  constructor(private _api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this._api.getPhotos().subscribe((res) => {
      this.getApiImage = res;
      for (let i = 0; i < 6; i++) {
        if (i < 5) this.pushObject();
        this.apiContent[i].title = this.getApiImage[i]?.title;
        this.apiContent[i].image1 = this.getApiImage[i]?.url;
        this.apiContent[i].image2 = this.getApiImage[i]?.thumbnailUrl;
      }
      console.log(this.apiContent);
    });
  }
  pushObject() {
    this.apiContent.push({
      title: '',
      image1: '',
      image2: '',
    });
  }

  move() {
    this.router.navigate(['content']);
  }
}

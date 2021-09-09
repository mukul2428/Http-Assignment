import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../appServices/api.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit, OnDestroy {
  Title!: string;
  Image1!: string;
  Image2!: string;

  constructor(private _api: ApiService) {}

  ngOnInit(): void {
    this.Title = this._api.getTitle();
    this.Image1 = this._api.getImage1Url();
    this.Image2 = this._api.getImage2Url();
  }

  ngOnDestroy() {
    this._api.setImage1Url('null');
    this._api.setImage2Url('null');
  }
}

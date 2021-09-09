import { Component, OnInit } from '@angular/core';
import { ApiService } from '../appServices/api.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  Image1!:string;

  constructor(private _api: ApiService) { }

  ngOnInit(): void {
    // this.getPhotos();
    this.Image1 = this._api.getImage1Url();
  }

  // getPhotos(){
  //   this.api.getPhotos().subscribe((res)=>{
  //     console.log(res);
  //   })
  // }

}

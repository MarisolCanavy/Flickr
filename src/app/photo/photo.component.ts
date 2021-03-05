import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})



export class PhotoComponent implements OnInit {

  @Input() photo : any ;
  
  constructor() { }

  ngOnInit(): void {
  }

  getPhotoURL(): string { 
    return "https://farm" + this.photo.farm + ".static.flickr.com/" + this.photo.server + "/" + this.photo.id + "_" + this.photo.secret + "_b.jpg";
  }

}

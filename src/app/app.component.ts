import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Flickr';
  copyright = "@Marisol Canavy";
  tag = '';
  key = '2f212e9b033380a9290baeb70b416357';
  photos : any;
  
  constructor(private http: HttpClient){}

  private handleError(error: any): Promise<any> { 
    console.error('An error occurred', error); return Promise.reject(error.message || error);
  }
  
  getPhotos(): Promise<any> { 
    let url ="https://api.flickr.com/services/rest?nojsoncallback=1&method=flickr.photos.search&api_key="+this.key+"&tags="+this.tag+"&format=json";
    return this.http.get(url) .toPromise()
    .catch(this.handleError);
    }

  nouveau_mot_cle() : void{
    //console.log("Le nouveau mot clé est " + this.tag);
    this.getPhotos().then(resp => this.photos = resp.photos);
  }


  getPhotoURL(photo : any ): string { 
    return "https://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_s.jpg";
    }

  help(): void { 
    console.log("Click ici 1");
    }
}


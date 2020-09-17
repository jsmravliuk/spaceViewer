import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListItemService {

  configUrl: string = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=MJZbMBigKOQwhRduBWcSNYghaKAjmVgsjoJ5C1iI";

  constructor(
    public http: HttpClient
  ) { }

  getPictures() {
    return this.http.get(this.configUrl);
  }
}

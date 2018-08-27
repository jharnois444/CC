import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _imageUrl = 'https://picsum.photos/list';
  constructor( private _http: Http ) { }

  public getImages() {
    return this._http.get(this._imageUrl).toPromise();
  }
}

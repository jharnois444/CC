import { Component } from '@angular/core';

// services
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Capco-Challenge';
  private images = [];
  private imagesOne = [];
  private imagesTwo = [];
  private numItemsToGenerate = 8;

  constructor( private apiService: ApiService) {
    this.apiService.getImages()
      .then(res => {
        this.images = res.json().slice(0, 16);
        this.imagesOne = this.images.slice(0, 8);
        this.imagesTwo = this.images.slice(8, 16);
        console.log(this.imagesTwo);
      });
  }
}

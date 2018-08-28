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

  constructor( private apiService: ApiService) {
  }
}

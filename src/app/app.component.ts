import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: 'AIzaSyCKhKBtOOwJuxECT-NiCLqGlzgvRuD5-qk',
      authDomain: 'angular-exo.firebaseapp.com',
      databaseURL: 'https://angular-exo.firebaseio.com',
      projectId: 'angular-exo',
      storageBucket: 'angular-exo.appspot.com',
      messagingSenderId: '138755716703'
    };
    firebase.initializeApp(config);
  }
}

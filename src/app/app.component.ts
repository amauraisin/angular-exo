import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  Posts = [
    {
      title: 'Machine à laver',
      content: 'Ma machine à laver de toute beauté',
      loveIts: -1
    },
    {
      title: 'Mercerie',
      content: 'Quelle belle mercerie, ce bel endroit',
      loveIts: 2
    },
    {
      title: 'Micro-ondes',
      content: 'Les ondes permettent de générer des petits plats sympas',
      loveIts: -3
    },
    {
      title: 'Laverie',
      content: 'Une laverie ... ',
      loveIts: 4
    }
  ];
}

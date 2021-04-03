import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wedding-site';
  dataset = ['Manoj George: Table 1', 'Alana Roy: Table 1',
   'Siby Chechi: Center Stage', 'Paco: Kitchen', 'Wonka: Under Table',
  'Larry Lobster: Under The Sea', 'Bessie Chechi: Table 2'];
  searchText: string ="";
}

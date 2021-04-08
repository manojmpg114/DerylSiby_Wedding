import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wedding-site';
  dataset = ['Anna Ariaratnam: Table 1', 'Jacob Samuel: Table 1', 'Joseph Oommen: Table 1', 'Malayil Joseph: Table 1', 'Sally Jacob: Table 1',
   'Wilsy Joseph: Table 1', 'George P. Kurian: Table 2', 'Matthews P Mammen: Table 2', 'Sally Kurian: Table 2', 'Susan Matthews: Table 2', 'Abigail Godly: Table 3', 
   'Cederick Parakulath: Table 3', 'Elizabeth Godly: Table 3', 'Jeremy Joseph: Table 3', 'Jonathan Joseph: Table 3', 'Princy Zacharia: Table 3', 'Wijin Joe: Table 3', 
   'Anoob Abraham: Table 4', 'Blyth Manatt: Table 4', 'Jared Manatt: Table 4', 'Marykutty Manatt: Table 4', 'Quinn Manatt: Table 4', 'Riley Manatt: Table 4', 
   'Robby Manatt: Table 4', 'Sinu Kurian: Table 4', 'Teena Abraham: Table 4', 'Jolene Graf: Table 5', 'Lee Sheridan: Table 5', 'Lewis Graf: Table 5', 
   'Nina Graf: Table 5', 'Patrick Graf: Table 5', 'Ambu Palakudy: Table 6', 'Bessie George: Table 6', 'Bivy Stanitis: Table 6', 'George P. Kurian Jr: Table 6',
    'Janet Palakudy: Table 6', 'Manoj George: Table 6', 'Michael Stanitis: Table 6', 'Reno Abraham: Table 6', 'Blessy Jacob: Table 7', 'Christian Jacob: Table 7',
     'Ethan Jacob: Table 7', 'Jaison Joseph: Table 7', 'Stephanie Joseph: Table 7', 'Tony Jacob: Table 7', 'Bhoumic Raval: Table 8', 'Harriet Bensaah: Table 8',
      'Jeanine Parisi: Table 8', 'Jolie Parisi: Table 8', 'Purvi Raval: Table 8', 'Renny John: Table 8', 'Adam Jacob: Table 9', 'Alison Jacob: Table 9', 
      'Amelia Jacob: Table 9', 'Anupa Jacob: Table 9', 'Emory Christman: Table 9', 'Jarwis Jacob: Table 9', 'Joshua Christman: Table 9', 
      'Priya Christman: Table 9', 'Sajini Christman: Table 9', 'Sila Christman: Table 9', 'Amir Naidoo: Table 10', 'Florence Nnoram: Table 10', 
      'Karishma Ilyas: Table 10', 'Kellie Sae: Table 10', 'Michael Nnoram: Table 10', 'Najima Naidoo: Table 10', 'Navin Naidoo: Table 10', 
      'Selina Naidoo: Table 10', 'Silina Chowbay: Table 10', 'Avery Burroughs: Table 11', 'Dwayne Birch: Table 11', 'Eric Marvin: Table 11', 
      'Evan Johnson: Table 11', 'Gabrielle Johnson: Table 11', 'Haley Pompei: Table 11'];
  searchText: string ="";
}

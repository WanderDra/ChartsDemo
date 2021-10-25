import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  fruits = [
    { fruit: 'Apples', count: 10 },
    { fruit: 'Oranges', count: 12 },
    { fruit: 'Lemons', count: 15 },
    { fruit: 'Pears', count: 20 },
    { fruit: 'Pineapples', count: 3 }
  ];


  constructor() { }
  
}

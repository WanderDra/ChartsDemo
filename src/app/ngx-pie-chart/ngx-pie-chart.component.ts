import { Component, OnInit } from '@angular/core';
import { ChartDataService } from '../chart-data.service';

@Component({
  selector: 'app-ngx-pie-chart',
  templateUrl: './ngx-pie-chart.component.html',
  styleUrls: ['./ngx-pie-chart.component.scss']
})
export class NgxPieChartComponent implements OnInit {

  data = new Array<Object>();
  view: [number, number] = [700, 400];

  // options
  gradient: boolean = false;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: any = 'below';

  colorScheme: any = {
    domain: [ '#eb3573', '#1db2f5', '#f5564a', '#97c95c', '#ffc720']
  };

  constructor(private dataAPI: ChartDataService) { 
    dataAPI.fruits.forEach((cur: {fruit: string, count: number}) => {
      this.data.push({'name': cur.fruit, 'value': cur.count});
    })
  }

  ngOnInit(): void {
  }

  onSelect(data: string): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: string): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: string): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onSwitchBtnClicked(){
    this.isDoughnut = !this.isDoughnut;
  }

}

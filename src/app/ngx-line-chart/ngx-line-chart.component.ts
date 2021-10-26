import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ScaleType } from '@swimlane/ngx-charts';
import { Color } from '@swimlane/ngx-charts/lib/utils/color-sets';
import { ChartDataService } from '../chart-data.service';

@Component({
  selector: 'app-ngx-line-chart',
  templateUrl: './ngx-line-chart.component.html',
  styleUrls: ['./ngx-line-chart.component.scss']
})
export class NgxLineChartComponent implements OnInit {

    multi?: any[];
    view: [number, number] = [700, 400];

    // options
    legend: boolean = true;
    showLabels: boolean = true;
    animations: boolean = true;
    xAxis: boolean = true;
    yAxis: boolean = true;
    showYAxisLabel: boolean = true;
    showXAxisLabel: boolean = true;
    xAxisLabel: string = 'Census';
    yAxisLabel: string = 'GDP';
    timeline: boolean = true;
    autoScale: boolean = true;

    colorScheme: Color = {
      name: "",
      selectable: true,
      group: ScaleType.Time,
      domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
    };

  constructor(private dataAPI: ChartDataService) {
    this.multi = dataAPI.gdp;
   }

  ngOnInit(): void {
    this.multi?.forEach(cur => {
      let series: Array<{value: number, name: any}> = cur.series;
      series.forEach((cur) => {
        cur.name = new Date(cur.name);
      })
    })
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

}

import { Component, OnInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { ChartDataService } from '../chart-data.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  type = 'pie'

  pieChartDataSource = new DataSource({
    store: {
        type: 'array',
        data: this.dataAPI.fruits,
        onLoaded: function () {
            // Event handling commands go here
        }
    },
    paginate: false
});

  constructor(private dataAPI: ChartDataService) { }

  ngOnInit(): void {
  }

  customizeText(pointInfo: any){
    return pointInfo.argument + ': ' + pointInfo.value;
  }

  onSwitchTypeBtnClicked(){
    this.type === 'pie' ? this.type = 'donut' : this.type = 'pie';
    
  }

}

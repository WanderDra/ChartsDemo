import { Component, OnInit, ViewChild } from '@angular/core';
import { DxChartComponent } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';
import { ChartDataService } from '../chart-data.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  
  chartDataSource = new DataSource({
    store: {
        type: 'array',
        data: this.dataAPI.fruits,
        onLoaded: function () {
            // Event handling commands go here
        }
    },
    paginate: false
  });

  @ViewChild('chart', {static: false}) chart?: DxChartComponent;
  showLabel = true;

  constructor(private dataAPI: ChartDataService) { }
  
  ngOnInit(): void {
  }

  onBarHoverChanged(e: Event){
     const series: any = e.target!;
     if (series.isHovered()){
       console.log('Hovering');
     }else{
       console.log('Unhovered');
       
     }
  }

  onGetBtnClicked(){
    console.log(this.chart?.instance.getAllSeries());
  }

  legendClickHandler(e: Event){
    const series: any = e.target;
    if (series.isVisible()){
      series.hide();
    }else{
      series.show();
    }
  }

  customizeText(pointInfo: any){
    return pointInfo.argument + ': ' + pointInfo.value;
  }

  onLabelToggleBtn(){
    this.showLabel = !this.showLabel;
  }

}

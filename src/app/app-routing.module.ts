import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { NgxLineChartComponent } from './ngx-line-chart/ngx-line-chart.component';
import { NgxPieChartComponent } from './ngx-pie-chart/ngx-pie-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

const routes: Routes = [
  { path: 'chart', component: ChartComponent},
  { path: 'piechart', component: PieChartComponent},
  { path: 'ngxlinechart', component: NgxLineChartComponent},
  { path: 'ngxpiechart', component: NgxPieChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

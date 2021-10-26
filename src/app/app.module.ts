import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DevExtremeModules } from './LibModules/dev-extreme/dev-extreme.module';
import { NgxLineChartComponent } from './ngx-line-chart/ngx-line-chart.component';
import { NgxChartModule } from './LibModules/ngx-chart/ngx-chart.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPieChartComponent } from './ngx-pie-chart/ngx-pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    PieChartComponent,
    NavBarComponent,
    NgxLineChartComponent,
    NgxPieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevExtremeModules,
    NgxChartModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

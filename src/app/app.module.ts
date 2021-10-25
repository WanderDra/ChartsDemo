import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DevExtremeModules } from './LibModules/dev-extreme/dev-extreme.module';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    PieChartComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevExtremeModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

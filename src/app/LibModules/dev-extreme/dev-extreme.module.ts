import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxChartModule, DxPieChartModule } from 'devextreme-angular';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    DxChartModule,
    DxPieChartModule
  ]
})
export class DevExtremeModules { }

import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chart.js';
import { Label } from 'ng2-charts';
import { Color, BaseChartDirective} from 'ng2-charts';
import * as pluginAnnotations from 'chart.js';

@Component({
  selector: 'app-home-administrativa',
  templateUrl: './home-administrativa.component.html',
  styleUrls: ['./home-administrativa.component.css']
})
export class HomeAdministrativaComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }


}

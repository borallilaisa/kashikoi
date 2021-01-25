import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../../../services/dashboard.service";
import * as moment from "moment";
import {ChartOptions, ChartType} from "chart.js";
import {Label} from "ng2-charts";
import * as pluginDataLabels from "chart.js";

@Component({
  selector: 'app-assuntos-mais-populares-graph',
  templateUrl: './assuntos-mais-populares-graph.component.html',
  styleUrls: ['./assuntos-mais-populares-graph.component.css']
})
export class AssuntosMaisPopularesGraphComponent implements OnInit {

  public pieChartLabels:any = [];

  public pieChartData: number[] = [];

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };

  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  data_graph:any = [];
  constructor(public dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getAssuntosMaisPopularesChart().then((data:any) => {
      let aux = data;

      console.log(data);

      for(let item of data) {

        this.pieChartLabels.push(item.titulo);
        this.pieChartData.push(item.quantidade);

      }

      setTimeout(() => this.data_graph = data, 500);

    })
  }



  public chartHovered(event): void {
    console.log(event);
  }


}



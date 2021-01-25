import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../../../services/dashboard.service";
import {ChartOptions, ChartType} from "chart.js";
import * as pluginDataLabels from "chart.js";
import * as moment from "moment";

@Component({
  selector: 'app-total-conversas-trimestre-graph',
  templateUrl: './total-conversas-trimestre-graph.component.html',
  styleUrls: ['./total-conversas-trimestre-graph.component.css']
})
export class TotalConversasTrimestreGraphComponent implements OnInit {

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
    this.dashboardService.getTotalConversasTrimestreChart().then((data:any) => {
      let aux = data;

      for(let item of data) {

        this.pieChartLabels.push(this.formatDate(`${item.year}-${item.month}`));
        this.pieChartData.push(item.total_data);

      }

      setTimeout(() => this.data_graph = data, 500);

    })
  }

    formatDate(date) {
      moment.locale('pt-br');

      return moment(date, 'YYYY-MM').format('MMM/YYYY');
    }

    public chartHovered(event): void {
      console.log(event);
    }

}

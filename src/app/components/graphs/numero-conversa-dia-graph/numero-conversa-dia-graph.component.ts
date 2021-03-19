import { Component, OnInit } from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Color, Label} from "ng2-charts";
import * as pluginAnnotations from "chart.js";
import {DashboardService} from "../../../services/dashboard.service";
import * as moment from "moment";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-numero-conversa-dia-graph',
  templateUrl: './numero-conversa-dia-graph.component.html',
  styleUrls: ['./numero-conversa-dia-graph.component.css']
})
export class NumeroConversaDiaGraphComponent implements OnInit {

  public lineChartData:any = [
    { data: [], label: 'Número de mensagens trocadasng durante a semana' },
  ];
  back_url:string = environment.authUrl;
  public lineChartLabels:any = [];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  data_graph:any = [];

  constructor(public dashboardService: DashboardService) { }

  ngOnInit(): void {

    this.dashboardService.getNumeroConversasDIaChart().then((data:any) => {
      let aux = data;

      for(let item of data) {

        this.lineChartLabels.push(this.formatDate(`${item.year}-${item.month}-${item.dia}`));
        this.lineChartData[0].data.push(item.total_data);

      }

      setTimeout(() => this.data_graph = data, 500);

    })
  }

  formatDate(date) {
    moment.locale('pt-br');

    return moment(date, 'YYYY-MM-DD').format('dddd');
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered(event): void {
    console.log(event);
  }

}

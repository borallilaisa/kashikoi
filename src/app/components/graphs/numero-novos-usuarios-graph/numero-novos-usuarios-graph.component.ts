import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from "chart.js";
import * as moment from "moment";
import {DashboardService} from "../../../services/dashboard.service";
import {ChartOptions, ChartType} from "chart.js";

@Component({
  selector: 'app-numero-novos-usuarios-graph',
  templateUrl: './numero-novos-usuarios-graph.component.html',
  styleUrls: ['./numero-novos-usuarios-graph.component.css']
})
export class NumeroNovosUsuariosGraphComponent implements OnInit {
  public barChartData:any = [
    { data: [], label: 'Número de novos usuários cadastrados essa semana' },
  ];
  public barChartLabels:any = [];
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];



  data_graph:any = [];

  constructor(public dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getNumeroUsuariosDiaChart().then((data:any) => {
      let aux = data;

      for(let item of data) {

        this.barChartLabels.push(this.formatDate(`${item.year}-${item.month}-${item.dia}`));
        this.barChartData[0].data.push(item.total_data);

      }

      setTimeout(() => this.data_graph = data, 500);

    })


  }

  formatDate(date) {
    moment.locale('pt-br');

    return moment(date, 'YYYY-MM-DD').format('dddd');
  }

  public chartHovered(event): void {
    console.log(event);
  }

}

import { Component, OnInit } from '@angular/core';
import {Label, MultiDataSet} from 'ng2-charts';
import {ChartType} from 'chart.js';
import {GraficasService} from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {

    // this.graficasService.getUsuariosRedes()
    //   .subscribe(data=>{
    //     console.log(data);
    //     const labels = Object.keys(data);
    //     const values = Object.values(data);
    //     this.doughnutChartLabels = labels;
    //     this.doughnutChartData.push(values);
    //   });

    this.graficasService.getUsuariosRedesRXJS()
      .subscribe(({labels, values}) => {
        this.doughnutChartLabels = labels;
        this.doughnutChartData = values;
      })
  }

}

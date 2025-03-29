import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-ring-chart',
  imports: [BaseChartDirective],
  templateUrl: './ring-chart.component.html',
  styleUrl: './ring-chart.component.scss',
  standalone: true,
})
export class RingChartComponent {
  data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  options = {};
}

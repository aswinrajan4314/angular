import { Component, OnInit } from '@angular/core';
import { Chart} from 'chart.js';

@Component({
  selector: 'app-dipohome',
  templateUrl: './dipohome.component.html',
  styleUrls: ['./dipohome.component.scss']
})
export class DipohomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const myChart = new Chart("chart", {
      type: 'line',
      data: {
          labels: ['trip1', 'trip2', 'trip3'],
          datasets: [{
              label: 'THIS MNT',
              data: [5, 4, 8],
              backgroundColor: "#4154f163",
              borderColor: "#4154f1",
              borderWidth: 1
              
          },
          {
            label: 'LAST MNT',
            data: [10, 6, 5],
            backgroundColor: "#e0f8e9",
            borderColor: "#2eca6a",
            borderWidth: 1
            
        },
        {
            label: 'THIS YEAR',
            data: [3, 8, 8],
            backgroundColor: "#ffecdf",
            borderColor: "#ff6e1d",
            borderWidth: 1
            
        }
        
        ]
      },
      options: {
          scales: {
              // y: {
              //     beginAtZero: true
              // }
          }
      }
  });

  const cChart = new Chart("chart2", {
    type: 'pie',
    data: {
        labels: ['trip1', 'trip2', 'trip3'],
        datasets: [{
            label: 'data',
            data: [42, 30, 2, ],
            backgroundColor: "#4154f1",
            // borderColor: "#4154f1",
            borderWidth: 1
            
        },
        {
          label: 'data 2',
          data: [5, 14, 50, ],
          backgroundColor: "#e0f8e9",
        //   borderColor: "#2eca6a",
          borderWidth: 1
          
      },
     
      
      ]
    },
    options: {
        scales: {
            // y: {
            //     beginAtZero: true
            // }
        }
    }
});
  }

}

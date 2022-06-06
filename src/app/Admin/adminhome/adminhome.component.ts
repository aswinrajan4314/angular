import { Component, OnInit } from '@angular/core';
import { Chart} from 'chart.js';


@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const myChart = new Chart("chart", {
      type: 'line',
      data: {
          labels: ['munnar', 'thodupuzha', 'kottayam'],
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
            data: [3, 8, 4],
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
    type: 'polarArea',
    data: {
        labels: ['MUNNAR', 'THODUPUZHA', 'KOTTAYAM'],
        datasets: [{
            label: 'data',
            data: [42, 30, 2,],
            backgroundColor: "#4154f163",
            // borderColor: "#4154f1",
            borderWidth: 1
            
        },
        {
          label: 'data 2',
          data: [5, 0, 50,],
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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  color1:any = {
    "background-color": '#523A28'
  }
  color2:any = {
    "background-color": '#BF6336'
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}

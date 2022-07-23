import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent implements OnInit {
  paramsData: any;
  certificationDetails:any;
  keyPoints:any;
  offered: any;
  category:any;
  styleContainer:any;
  styleTextContent:any;
  constructor(private route: Location) { }

  ngOnInit(): void {
    this.paramsData = localStorage.getItem('service');
    this.certificationDetails = JSON.parse(this.paramsData);
    this.keyPoints = this.certificationDetails.keyPoints;
    this.offered = this.certificationDetails.offeredBy;
    this.category = this.certificationDetails.category;

    if(this.category == 'services'){
      this.styleContainer = {
        'padding-bottom': '4%',
      }
      this.styleTextContent = {
        'width': '100%',
        'margin-top': '8%',
      }
    }
    else {
      this.styleContainer = '';
      this.styleTextContent = '';
    }
  }
}

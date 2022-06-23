import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route: Location) { }

  ngOnInit(): void {
    this.paramsData = this.route.getState();
    this.certificationDetails = this.paramsData.data;
    this.keyPoints = this.certificationDetails.keyPoints;
    console.log(this.certificationDetails);
  }

}

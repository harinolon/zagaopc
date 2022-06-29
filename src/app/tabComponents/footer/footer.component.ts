import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  IndianFlag:any = "../../assets/IndianFlag.png";
  UsFlag:any = "../../assets/USAFlag.png";
  constructor() { }

  ngOnInit(): void {
  }

}

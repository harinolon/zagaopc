import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/apiServices/api-services.service';

@Component({
  selector: 'app-our-company',
  templateUrl: './our-company.component.html',
  styleUrls: ['./our-company.component.scss']
})
export class OurCompanyComponent implements OnInit {

  about:any = [];
  spinnerStatus: boolean = true;
  constructor(private apiCall:ApiServicesService) { }

  ngOnInit(): void {
    this.apiCall.getMenuList("about","ZagaInformation").subscribe((data:any) => {
      console.log(data);
      this.spinnerStatus = false;
      this.about = data.aboutContent;
      console.log(this.about[0]);
      
      
  });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/apiServices/api-services.service';

@Component({
  selector: 'app-devops',
  templateUrl: './devops.component.html',
  styleUrls: ['./devops.component.scss']
})
export class DevopsComponent implements OnInit {
  servicesList:any = [];
  spinnerStatus: boolean = true;

  constructor(private apiCall:ApiServicesService,private route:Router) { }

  ngOnInit(): void {
    this.apiCall.getMenuList("devops", "ZagaInformation").subscribe(
      (data:any) => {
        this.servicesList = data.servicesList;
        this.spinnerStatus = false;
      });
  }

  async onHandleService(service:any){
    console.log(service);
    localStorage.setItem("service", JSON.stringify(service));
    await this.route.navigate(['/certification']);
  }
}

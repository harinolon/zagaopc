import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/apiServices/api-services.service';

@Component({
  selector: 'app-management-team',
  templateUrl: './management-team.component.html',
  styleUrls: ['./management-team.component.scss']
})
export class ManagementTeamComponent implements OnInit {
  managementTeam:any = [];
  socialLinks:any = [];
  spinnerStatus: boolean = true;
  constructor(private apiCall:ApiServicesService) { }

  ngOnInit(): void {
    this.apiCall.getMenuList("managementTeam","ZagaInformation").subscribe((data:any) => {
      // console.log(data);
      this.managementTeam = data.teamDetails;
      for(let team=0; team<this.managementTeam.length; team++) {
        console.log(this.managementTeam[team].socialLinks);
        this.spinnerStatus = false;
        this.socialLinks = this.managementTeam[team].socialLinks;
      }
      console.log(this.managementTeam[0]);
    });
  }

}

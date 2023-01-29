import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/apiServices/api-services.service';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {

  constructor(private apiCall:ApiServicesService) { }

 

  // expertDetails:any = [
  //   {
  //     "name": "SURENDAR",
  //     "title": "SENIOR SOFTWARE DEVELOPER",
  //     "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
  //     "icon": "fab fa-linkedin-in",
  //     "socialLinks": [
  //       {
  //         "name": "LinkedIn",
  //         "link": "https://www.linkedin.com/",
  //         "icon": "fab fa-linkedin-in"
  //       }
  //     ]
  //   },
  //   {
  //     "name": "HARIHARAN",
  //     "title": "SENIOR SOFTWARE DEVELOPER",
  //     "imageUrl": "../../../assets/new.jpg",
  //     "icon": "fab fa-linkedin-in",
  //     "socialLinks": [
  //       {
  //         "name": "LinkedIn",
  //         "link": "https://www.linkedin.com/in/hariharan-p-0b32a51b0/",
  //         "icon": "fab fa-linkedin-in"
  //       }
  //     ]
  //   },
  //   {
  //     "name": "MUKESH",
  //     "title": "SENIOR SOFTWARE DEVELOPER",
  //     "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
  //     "icon": "fab fa-linkedin-in",
  //     "socialLinks": [
  //       {
  //         "name": "LinkedIn",
  //         "link": "https://www.linkedin.com/",
  //         "icon": "fab fa-linkedin-in"
  //       }
  //     ]
  //   },
  //   {
  //     "name": "JEYARAGHUL",
  //     "title": "SENIOR SOFTWARE DEVELOPER",
  //     "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
  //     "icon": "fab fa-linkedin-in",
  //     "socialLinks": [
  //       {
  //         "name": "LinkedIn",
  //         "link": "https://www.linkedin.com/",
  //         "icon": "fab fa-linkedin-in"
  //       }
  //     ]
  //   },
  //   {
  //     "name": "ANUSHIYA",
  //     "title": "SENIOR SOFTWARE DEVELOPER",
  //     "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
  //     "icon": "fab fa-linkedin-in",
  //     "socialLinks": [
  //       {
  //         "name": "LinkedIn",
  //         "link": "https://www.linkedin.com/",
  //         "icon": "fab fa-linkedin-in"
  //       }
  //     ]
  //   },
  //   {
  //     "name": "SHARANYA",
  //     "title": "SENIOR SOFTWARE DEVELOPER",
  //     "imageUrl": "../../../assets/sha.jpeg",
  //     "icon": "fab fa-linkedin-in",
  //     "socialLinks": [
  //       {
  //         "name": "LinkedIn",
  //         "link": "https://www.linkedin.com/",
  //         "icon": "fab fa-linkedin-in"
  //       }
  //     ]
  //   },
  // ]
  expertDetails:any = [];
  spinnerStatus: boolean = false;
  socialLinks:any = [
    // {
    //   "name": "LinkedIn",
    //   "link": "https://www.linkedin.com/",
    //   "icon": "fab fa-linkedin-in"
    // }
  ]

  ngOnInit(): void {
    this.apiCall.getMenuList("developmentTeam", "ZagaInformation").subscribe(
      (data:any) => {
         this.spinnerStatus = true;
         this.expertDetails = data.teamDetails;
         for(let team=0; team<this.expertDetails.length; team++) {
          console.log(this.expertDetails[team].socialLinks);
          this.socialLinks = this.expertDetails[team].socialLinks;
        }
      });
  }

}

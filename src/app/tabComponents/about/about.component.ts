import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/apiServices/api-services.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  // expertDetails:any = [];
  // expertDetails = [
  //   {
  //     "name": "SURENDAR",
  //     "title": "",
  //     "linkedInUrl": "https://www.linkedin.com/in/johndoe/",
  //     "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
  //   },
  //   {
  //     "name": "HARIHARAN",
  //     "title": "",
  //     "linkedInUrl": "https://www.linkedin.com/in/hariharan-p-0b32a51b0/",
  //     "imageUrl": "../../../assets/new.jpg",
  //   },
  //   {
  //     "name": "MUKESH",
  //     "title": "",
  //     "linkedInUrl": "https://www.linkedin.com/in/johndoe/",
  //     "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
  //   },
  //   {
  //     "name": "JEYARAGHUL",
  //     "title": "",
  //     "linkedInUrl": "https://www.linkedin.com/in/johndoe/",
  //     "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
  //   },
  //   {
  //     "name": "ANUSHIYA",
  //     "title": "",
  //     "linkedInUrl": "https://www.linkedin.com/in/johndoe/",
  //     "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
  //   },
  //   {
  //     "name": "SHARANYA",
  //     "title": "",
  //     "linkedInUrl": "https://www.linkedin.com/in/johndoe/",
  //     "imageUrl": "../../../assets/sha.jpeg",
  //   },
  // ]
  socialLinks:any = [
    // {
    //   "name": "LinkedIn",
    //   "link": "https://www.linkedin.com/",
    //   "icon": "fab fa-linkedin-in"
    // },
    // {
    //   "name": "Twitter",
    //   "link": "https://twitter.com/",
    //   "icon": "fab fa-twitter"
    // },
  ]

  // managementTeam:any = [
  //   {
  //       "name": "VASANTHA LAKSHMI",
  //       "title": "ChIEF EXECUTIVE OFFICER",
  //       "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
  //       "socialLinks": [
  //           {
  //               "name": "LinkedIn",
  //               "link": "https://www.linkedin.com/",
  //               "icon": "fab fa-linkedin-in"
  //           },
  //           {
  //               "name": "Twitter",
  //               "link": "https://twitter.com/",
  //               "icon": "fab fa-twitter"
  //           }
  //       ]
  //   },
  //   {
  //       "name": "Dr.VIJAYARANGAN",
  //       "title": "CHIEF ADVISORY OFFICER",
  //       "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
  //       "socialLinks": [
  //           {
  //               "name": "LinkedIn",
  //               "link": "https://www.linkedin.com/",
  //               "icon": "fab fa-linkedin-in"
  //           },
  //           {
  //               "name": "Twitter",
  //               "link": "https://twitter.com/",
  //               "icon": "fab fa-twitter"
  //           }
  //       ]
  //   },
  //   {
  //       "name": "GIRIDHARAN",
  //       "title": "MANAGING DIRECTOR",
  //       "linkedInUrl": "https://www.linkedin.com/in/johndoe/",
  //       "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
  //       "socialLinks": [
  //           {
  //               "name": "LinkedIn",
  //               "link": "https://www.linkedin.com/",
  //               "icon": "fab fa-linkedin-in"
  //           },
  //           {
  //               "name": "Twitter",
  //               "link": "https://twitter.com/",
  //               "icon": "fab fa-twitter"
  //           }
  //       ]
  //   },
  //   {
  //       "name": "CLYDE TEDRICK",
  //       "title": "CHIEF TECHNOLOGY EVANGELIST - USA",
  //       "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
  //       "socialLinks": [
  //           {
  //               "name": "LinkedIn",
  //               "link": "https://www.linkedin.com/",
  //               "icon": "fab fa-linkedin-in"
  //           },
  //           {
  //               "name": "Twitter",
  //               "link": "https://twitter.com/",
  //               "icon": "fab fa-twitter"
  //           }
  //       ]
  //   }
  // ];

  // about = [
  //   {
  //     "heading1": "Who we are?",
  //     "img1": "../../../assets/2.jpg",
  //     "content1": "ZAGA Open Source Technology Solutions Pvt Ltd) is a technology solutions provider founded by IT Industry exposed Technologists. We provide application modernization solutions for our clients and also offer training for students and working professionals to update their knowledge in IT field."
  //   },
  //   {
  //     "heading2": "Our Difference",
  //     "img2": "../../../assets/ourvalues.png",
  //     "content2": "We know where cloud came from. We know where it's going. ZAGA cloud consultant who combines analysis, modeling and strategy development of a traditional consulting firm with the proven ability to deploy, integrate and operate complex application modernization solutions at scale."
  //   },
  //   {
  //     "heading3": "Our Mission",
  //     "img3": "../../../assets/ourmission.png",
  //     "content3": "Build new cloud native apps, modernize existing apps, and operate infrastructure that serves them all across any cloud. Deliver end-to-end automation and orchestrate across all of your systems to deliver connected customer experiences, faster."
  //   }
  // ];

  about:any = [];
  managementTeam:any = [];
  spinnerStatus:boolean = false;

  constructor(private apiCall:ApiServicesService) { }

  ngOnInit(): void {
    this.apiCall.getMenuList("about","ZagaInformation").subscribe((data:any) => {
      console.log(data);
      this.spinnerStatus = true;
      this.about = data.aboutContent;
      console.log(this.about[0]);
      
    });

    // this.apiCall.getMenuList("developmentTeam","ZagaInformation").subscribe((data:any) => {
    //   // console.log(data);
    //   this.expertDetails = data.teamDetails;
    //   console.log(this.expertDetails[0]);
      
    // });
    
    this.apiCall.getMenuList("managementTeam","ZagaInformation").subscribe((data:any) => {
      // console.log(data);
      this.managementTeam = data.teamDetails;
      for(let team=0; team<this.managementTeam.length; team++) {
        console.log(this.managementTeam[team].socialLinks);
        this.socialLinks = this.managementTeam[team].socialLinks;
      }
      console.log(this.managementTeam[0]);
    });
    
  }

}

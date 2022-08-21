import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/apiServices/api-services.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  // expertDetails:any = [];
  expertDetails = [
    {
      "name": "SURENDAR",
      "title": "",
      "linkedInUrl": "https://www.linkedin.com/in/johndoe/",
      "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
    },
    {
      "name": "HARIHARAN",
      "title": "",
      "linkedInUrl": "https://www.linkedin.com/in/hariharan-p-0b32a51b0/",
      "imageUrl": "../../../assets/new.jpg",
    },
    {
      "name": "MUKESH",
      "title": "",
      "linkedInUrl": "https://www.linkedin.com/in/johndoe/",
      "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
    },
    {
      "name": "JEYARAGHUL",
      "title": "",
      "linkedInUrl": "https://www.linkedin.com/in/johndoe/",
      "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
    },
    {
      "name": "ANUSHIYA",
      "title": "",
      "linkedInUrl": "https://www.linkedin.com/in/johndoe/",
      "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
    },
    {
      "name": "SHARANYA",
      "title": "",
      "linkedInUrl": "https://www.linkedin.com/in/johndoe/",
      "imageUrl": "../../../assets/sha.jpeg",
    },
  ]
  socialLinks:any = [
    {
      "name": "LinkedIn",
      "link": "https://www.linkedin.com/",
      "icon": "fab fa-linkedin-in"
    }
  ]

  managementTeam:any =  [
    {
      "name": "VASANTHA LAKSHMI",
      "title": "CEO",
      "linkedInUrl": "https://www.linkedin.com/in/johndoe/",
      "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
    },
    {
      "name": "Dr.VIJAYARANGAN",
      "title": "CAO",
      "linkedInUrl": "https://www.linkedin.com/in/hariharan-p-0b32a51b0/",
      "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
    },
    {
      "name": "GIRIDHARAN",
      "title": "MD",
      "linkedInUrl": "https://www.linkedin.com/in/johndoe/",
      "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
    },
    {
      "name": "CLYDE TEDRICK",
      "title": "CTE - USA",
      "linkedInUrl": "https://www.linkedin.com/in/johndoe/",
      "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
    },
  ];

  about = [
    {
      "heading1": "Who we are?",
      "img1": "../../../assets/2.jpg",
      "content1": "ZAGA Open Source Technology Solutions Pvt Ltd) is a technology solutions provider founded by IT Industry exposed Technologists. We provide application modernization solutions for our clients and also offer training for students and working professionals to update their knowledge in IT field."
    },
    {
      "heading2": "Our Difference",
      "img2": "../../../assets/ourvalues.png",
      "content2": "We know where cloud came from. We know where it's going. ZAGA cloud consultant who combines analysis, modeling and strategy development of a traditional consulting firm with the proven ability to deploy, integrate and operate complex application modernization solutions at scale."
    },
    {
      "heading3": "Our Mission",
      "img3": "../../../assets/ourmission.png",
      "content3": "Build new cloud native apps, modernize existing apps, and operate infrastructure that serves them all across any cloud. Deliver end-to-end automation and orchestrate across all of your systems to deliver connected customer experiences, faster."
    }
  ];

  // about:any = [];
  // managementTeam:any = [];

  constructor(private apiCall:ApiServicesService) { }

  ngOnInit(): void {
    // this.apiCall.getMenuList("about","ZagaInformation").subscribe((data:any) => {
    //   console.log(data);
    //   this.about = data.aboutContent;
    //   console.log(this.about[0]);
      
    // });

    // this.apiCall.getMenuList("developmentTeam","ZagaInformation").subscribe((data:any) => {
    //   // console.log(data);
    //   this.expertDetails = data.teamDetails;
    //   console.log(this.expertDetails[0]);
      
    // });
    
    // this.apiCall.getMenuList("managementTeam","ZagaInformation").subscribe((data:any) => {
    //   // console.log(data);
    //   this.managementTeam = data.teamDetails;
    //   console.log(this.managementTeam[0]);
    // });
    
  }

}

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
      "title": "FULL STACK ENGINEER",
      "linkedInUrl": "https://www.linkedin.com/in/johndoe/",
      "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
    },
    {
      "name": "HARIHARAN",
      "title": "FULL STACK ENGINEER",
      "linkedInUrl": "https://www.linkedin.com/in/hariharan-p-0b32a51b0/",
      "imageUrl": "../../../assets/new.jpg",
    },
    {
      "name": "MUKESH",
      "title": "NETWORK ENGINEER",
      "linkedInUrl": "https://www.linkedin.com/in/johndoe/",
      "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
    },
    {
      "name": "ANUSHIYA",
      "title": "FRONTEND DEVELOPER",
      "linkedInUrl": "https://www.linkedin.com/in/johndoe/",
      "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
    },
    {
      "name": "RAHGUL",
      "title": "BACKEND DEVELOPER",
      "linkedInUrl": "https://www.linkedin.com/in/johndoe/",
      "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
    },
    {
      "name": "SHARANYA",
      "title": "NETWORK ENGINEER",
      "linkedInUrl": "https://www.linkedin.com/in/johndoe/",
      "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
    },
  ]

  managementTeam:any =  [
    {
      "name": "VASANTHA LAKSHMI",
      "title": "PRESIDENT & CEO",
      "linkedInUrl": "https://www.linkedin.com/in/johndoe/",
      "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
    },
    {
      "name": "Dr.VIJAYARANGAN",
      "title": "CHIEF ADVISORY OFFICER",
      "linkedInUrl": "https://www.linkedin.com/in/hariharan-p-0b32a51b0/",
      "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
    },
    {
      "name": "GIRIDHARAN",
      "title": "MANAGING DIRECTOR",
      "linkedInUrl": "https://www.linkedin.com/in/johndoe/",
      "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
    },
    {
      "name": "CLYDE TEDRICK",
      "title": "CHIEF TECHNOLOGY EVANGELIST - USA",
      "linkedInUrl": "https://www.linkedin.com/in/johndoe/",
      "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
    },
  ];

  about = [
    {
      "heading1": "Who we are?",
      "img1": "../../../assets/whoweare.png",
      "content1": "ZAGA Open Source Technology Solutions Pvt Ltd) is a technology solutions provider founded by IT Industry exposed Technologists. We provide IT solutions for our clients and also offer training for students and working professionals to update their knowledge in IT field"
    },
    {
      "heading2": "Our Difference",
      "img2": "../../../assets/ourdiffer.png",
      "content2": "We provide training on latest state of the art IT technologies with emphasis on placement oriented real time application development training. Our trainers are technologists working in IT industries with wide and varied experience."
    },
    {
      "heading3": "Our Mission",
      "img3": "../../../assets/ourmission.png",
      "content3": "1. Increased access to high-quality training for engineering students & Software professionals. 2. Enhanced teaching and learning using On line and On campus mode. 3. Advanced teaching, learning and mentoring through experienced IT technologists from USA."
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

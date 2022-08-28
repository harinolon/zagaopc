import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  expertDetails:any = [
    {
      "name": "SURENDAR",
      "title": "SENIOR SOFTWARE DEVELOPER",
      "linkedInUrl": "https://www.linkedin.com/in/surendar-ramaraj-82ab78229",
      "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
      "icon": "fab fa-linkedin-in"
    },
    {
      "name": "HARIHARAN",
      "title": "SENIOR SOFTWARE DEVELOPER",
      "linkedInUrl": "https://www.linkedin.com/in/hariharan-p-0b32a51b0/",
      "imageUrl": "../../../assets/new.jpg",
      "icon": "fab fa-linkedin-in"
    },
    {
      "name": "MUKESH",
      "title": "SENIOR SOFTWARE DEVELOPER",
      "linkedInUrl": "https://www.linkedin.com/in/mukesh-kumar-1306s2707",
      "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
      "icon": "fab fa-linkedin-in"
    },
    {
      "name": "JEYARAGHUL",
      "title": "SENIOR SOFTWARE DEVELOPER",
      "linkedInUrl": "https://www.linkedin.com/in/jeya-raghul-40b498152",
      "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
      "icon": "fab fa-linkedin-in"
    },
    {
      "name": "ANUSHIYA",
      "title": "SENIOR SOFTWARE DEVELOPER",
      "linkedInUrl": "https://www.linkedin.com/in/anushiya-dhamu-5168071b7/",
      "imageUrl": "../../../assets/pexels-pixabay-60504.jpg",
      "icon": "fab fa-linkedin-in"
    },
    {
      "name": "SHARANYA",
      "title": "SENIOR SOFTWARE DEVELOPER",
      "linkedInUrl": "https://www.linkedin.com/in/sharanya-sekar-3a7175231",
      "imageUrl": "../../../assets/sha.jpeg",
      "icon": "fab fa-linkedin-in"
    },
  ]
  socialLinks:any = [
    {
      "name": "LinkedIn",
      "link": "https://www.linkedin.com/",
      "icon": "fab fa-linkedin-in"
    }
  ]

}

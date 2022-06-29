import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  expertDetails = [
    {
      name: 'HARIHARAN',
      title: 'FULL STACK ENGINEER',
      linkedInUrl: 'https://www.linkedin.com/in/hariharan-p-0b32a51b0/',
      imageUrl: '../../../assets/new.jpg',
    },
    {
      name: 'SURENDAR',
      title: 'FULL STACK ENGINEER',
      linkedInUrl: 'https://www.linkedin.com/in/johndoe/',
      imageUrl: '../../../assets/pexels-pixabay-60504.jpg',
    },
    {
      name: 'RAHGUL',
      title: 'BACKEND DEVELOPER',
      linkedInUrl: 'https://www.linkedin.com/in/johndoe/',
      imageUrl: '../../../assets/pexels-pixabay-60504.jpg',
    },
    {
      name: 'ANUSHIYA',
      title: 'FRONTEND DEVELOPER',
      linkedInUrl: 'https://www.linkedin.com/in/johndoe/',
      imageUrl: '../../../assets/pexels-pixabay-60504.jpg',
    },
    {
      name: 'SHARANYA',
      title: 'NETWORK ENGINEER',
      linkedInUrl: 'https://www.linkedin.com/in/johndoe/',
      imageUrl: '../../../assets/pexels-pixabay-60504.jpg',
    },
    {
      name: 'MUKESH',
      title: 'NETWORK ENGINEER',
      linkedInUrl: 'https://www.linkedin.com/in/johndoe/',
      imageUrl: '../../../assets/pexels-pixabay-60504.jpg',
    },
  ]

  about = [
    {
      "heading1": "Who we are?",
      "img1": "https://www.kindpng.com/picc/m/46-468618_who-we-are-hd-png-download.png",
      "content1": "ZAGA Open Source Technology Solutions Pvt Ltd) is a technology solutions provider founded by IT Industry exposed Technologists. We provide IT solutions for our clients and also offer training for students and working professionals to update their knowledge in IT field"
    },
    {
      "heading2": "Our Difference",
      "img2": "http://pixprogrammers.co.in/assets/img/portfolio/portfolio-details-3.png",
      "content2": "We provide training on latest state of the art IT technologies with emphasis on placement oriented real time application development training. Our trainers are technologists working in IT industries with wide and varied experience."
    },
    {
      "heading3": "Our Mission",
      "img3": "https://flyclipart.com/thumb2/mission-clipart-current-status-53802.png",
      "content3": "1. Increased access to high-quality training for engineering students & Software professionals. 2. Enhanced teaching and learning using On line and On campus mode. 3. Advanced teaching, learning and mentoring through experienced IT technologists from USA."
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

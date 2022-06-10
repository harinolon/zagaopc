import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  servicesList = [
    {
      name: 'Mobile App Development',
      description: 'We develop mobile apps for iOS and Android.',
      imageUrl: '../../../assets/clipart1788464.png',
      enabled: true
    },
    {
      name: 'Web App Development',
      description: 'We develop web apps for both frontend and backend.',
      imageUrl: '../../../assets/pngfind.com-web-development-icon-png-4152510.png',
      enabled: true
    },
    {
      name: 'Cloud Development',
      description: 'We develop cloud solutions for both frontend and backend.',
      imageUrl: '../../../assets/pngwing.com.png',
      enabled: true
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

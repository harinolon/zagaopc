import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/apiServices/api-services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  // servicesList = [
  //   {
  //     name: 'Mobile App Development',
  //     description: 'We develop mobile apps for iOS and Android.',
  //     imageUrl: '../../../assets/clipart1788464.png',
  //     keyPoints: [
  //       {
  //         point: "We offer Mobile Application development for Android & IOS,services for different organizations and banking sectors on developing Mobile Applications."
  //       },
  //       {
  //         point: "Using our years of experienced and expertise people, to work on the Mobile Application Development."
  //       },
  //       {
  //         point: "Our app developers have an enviable level of knowledge and expertise in programming languages and they are easy to blend with latest technologies and frameworks."
  //       },
  //       {
  //         point: "We help clients accomplish all their business goals by developing custom Android and IOS."
  //       },
  //       {
  //         point: "Developing custom Android application using javascript framework like React Native."  
  //       },
  //       {
  //         point: "Our company aims to provide Mobile Application with good quality and to meet with the needs of our clients."
  //       },
  //     ],
  //     enabled: true,
  //     category: 'services',
  //   },
  //   {
  //     name: 'Web App Development',
  //     description: 'We develop web apps for both frontend and backend.',
  //     imageUrl: '../../../assets/pngfind.com-web-development-icon-png-4152510.png',
  //     enabled: true,
  //     keyPoints: [
  //       {
  //         point: "We offer Mobile Application development for Android & IOS,services for different organizations and banking sectors on developing Mobile Applications."
  //       },
  //       {
  //         point: "Using our years of experienced and expertise people, to work on the Mobile Application Development."
  //       },
  //       {
  //         point: "Our app developers have an enviable level of knowledge and expertise in programming languages and they are easy to blend with latest technologies and frameworks."
  //       },
  //       {
  //         point: "We help clients accomplish all their business goals by developing custom Android and IOS."
  //       },
  //       {
  //         point: "Developing custom Android application using javascript framework like React Native."  
  //       },
  //       {
  //         point: "Our company aims to provide Mobile Application with good quality and to meet with the needs of our clients."
  //       },
  //     ],
  //     category: 'services',
  //   },
  //   {
  //     name: 'Cloud Development',
  //     description: 'We develop cloud solutions for both frontend and backend.',
  //     imageUrl: '../../../assets/pngwing.com.png',
  //     enabled: true,
  //     keyPoints: [
  //       {
  //         point: "We offer Mobile Application development for Android & IOS,services for different organizations and banking sectors on developing Mobile Applications."
  //       },
  //       {
  //         point: "Using our years of experienced and expertise people, to work on the Mobile Application Development."
  //       },
  //       {
  //         point: "Our app developers have an enviable level of knowledge and expertise in programming languages and they are easy to blend with latest technologies and frameworks."
  //       },
  //       {
  //         point: "We help clients accomplish all their business goals by developing custom Android and IOS."
  //       },
  //       {
  //         point: "Developing custom Android application using javascript framework like React Native."  
  //       },
  //       {
  //         point: "Our company aims to provide Mobile Application with good quality and to meet with the needs of our clients."
  //       },
  //     ],
  //     category: 'services',
  //   },
  // ];

  servicesList:any = [];

  

  constructor(private apiCall:ApiServicesService,private route:Router) { }

  ngOnInit(): void {
    this.apiCall.getMenuList("services", "ZagaInformation").subscribe(
      (data:any) => {
        this.servicesList = data.servicesList;
      });
  }

  async onHandleService(service:any){
    console.log(service);
    localStorage.setItem("service", JSON.stringify(service));
    await this.route.navigate(['/certification']);
  }
}

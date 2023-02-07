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
  //     name: 'Application Modernization',
  //     description: 'Application Modernization values the existing functionality and reliability of the application that keeps the lights on as highly as any new capability.',
  //     imageUrl: '../../../assets/appmod.png',
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
  //     name: 'Professional Service',
  //     description: 'Our consultants will work with you to evaluate and implement solutions to help you reduce costs, improve efficiency, and deliver quickly.',
  //     imageUrl: '../../../assets/Support.png',
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
  //     name: 'Microservice',
  //     description: 'Compared to monolithic applications, microservices are small, autonomous units that address individual functions to help an application function.',
  //     imageUrl: '../../../assets/comp-insight3.png',
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
  //     name: 'Process Automation',
  //     description: 'With our intuitive, no-code interface, business users can quickly create, adapt, and automate manual processes and workflows without IT assistance.',
  //     imageUrl: '../../../assets/346-3461293_process-automation-automation-clip-art.png',
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
  spinnerStatus: boolean = true;
  

  constructor(private apiCall:ApiServicesService,private route:Router) { }

  ngOnInit(): void {
    this.apiCall.getMenuList("services", "ZagaInformation").subscribe(
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

import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/apiServices/api-services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-redhat-certs',
  templateUrl: './redhat-certs.component.html',
  styleUrls: ['./redhat-certs.component.scss']
})
export class RedhatCertsComponent implements OnInit {

  // servicesList = [
  //   {
  //     "name": "Red Hat Certified System Administrator (RHCSA)",
  //     "description": "Perform the core system administration skills required in Red Hat Enterprise Linux environments.",
  //     "offeredBy": "Red Hat",
  //     "enabled": true,
  //     "keyPoints": [
  //       {
  //         "point": "Understand and use essential tools for handling files, directories, command-line environments, and documentation."
  //       },
  //       {
  //         "point": "Operate running systems, including booting into different run levels, identifying processes, starting and stopping virtual machines, and controlling services."
  //       },
  //       {
  //         "point": "Configure local storage using partitions and logical volumes."
  //       },
  //       {
  //         "point": "Create and configure file systems and file system attributes, such as permissions, encryption, access control lists, and network file systems."
  //       },
  //       {
  //         "point": "Deploy, configure, and maintain systems, including software installation, update, and core services."
  //       },
  //       {
  //         "point": "Manage users and groups, including use of a centralized directory for authentication."
  //       },
  //       {
  //         "point": "Manage security, including basic firewall and SELinux configuration."
  //       }
  //     ],
  //     "category": "redhat-certs"
  //   },
  //   {
  //     "name": "Red Hat Certified Specialist in OpenShift Administration",
  //     "description": "Create, configure, and manage a cloud application platform using Red Hat OpenShift.",
  //     "offeredBy": "Red Hat",
  //     "enabled": true,
  //     "keyPoints": [
  //       {
  //         "point": "Understand and use essential tools for handling files, directories, command-line environments, and documentation."
  //       },
  //       {
  //         "point": "Operate running systems, including booting into different run levels, identifying processes, starting and stopping virtual machines, and controlling services."
  //       },
  //       {
  //         "point": "Configure local storage using partitions and logical volumes."
  //       },
  //       {
  //         "point": "Create and configure file systems and file system attributes, such as permissions, encryption, access control lists, and network file systems."
  //       },
  //       {
  //         "point": "Deploy, configure, and maintain systems, including software installation, update, and core services."
  //       },
  //       {
  //         "point": "Manage users and groups, including use of a centralized directory for authentication."
  //       },
  //       {
  //         "point": "Manage security, including basic firewall and SELinux configuration."
  //       }
  //     ],
  //     "category": "redhat-certs"
  //   },
  //   {
  //     "name": "Red Hat Certified Enterprise Microservices Developer",
  //     "description": "Who is able to develop reliable, performant JEE applications in a microservice-style environment and use Microprofile APIs to develop microservices enterprise Java applications.",
  //     "offeredBy": "Red Hat",
  //     "enabled": true,
  //     "keyPoints": [
  //       {
  //         "point": "Understand and use essential tools for handling files, directories, command-line environments, and documentation."
  //       },
  //       {
  //         "point": "Operate running systems, including booting into different run levels, identifying processes, starting and stopping virtual machines, and controlling services."
  //       },
  //       {
  //         "point": "Configure local storage using partitions and logical volumes."
  //       },
  //       {
  //         "point": "Create and configure file systems and file system attributes, such as permissions, encryption, access control lists, and network file systems."
  //       },
  //       {
  //         "point": "Deploy, configure, and maintain systems, including software installation, update, and core services."
  //       },
  //       {
  //         "point": "Manage users and groups, including use of a centralized directory for authentication."
  //       },
  //       {
  //         "point": "Manage security, including basic firewall and SELinux configuration."
  //       }
  //     ],
  //     "category": "redhat-certs"
  //   },
  // ];
  servicesList:any = [];
  spinnerStatus: boolean = true;


  constructor(private apiCall:ApiServicesService,private route:Router) { }

  ngOnInit(): void {
    this.apiCall.getMenuList("redhatCerts", "ZagaInformation").subscribe(
      (data:any) => {
        this.servicesList = data.servicesList;
        this.spinnerStatus = false;
      });
  }

  onHandleService(service:any){
    console.log(service);
    localStorage.setItem("service", JSON.stringify(service));
    this.route.navigate(['/certification']);
  }

}

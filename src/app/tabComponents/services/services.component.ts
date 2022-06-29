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
      enabled: true,
      category: 'services',
    },
    {
      name: 'Web App Development',
      description: 'We develop web apps for both frontend and backend.',
      imageUrl: '../../../assets/pngfind.com-web-development-icon-png-4152510.png',
      enabled: true,
      category: 'services',
    },
    {
      name: 'Cloud Development',
      description: 'We develop cloud solutions for both frontend and backend.',
      imageUrl: '../../../assets/pngwing.com.png',
      enabled: true,
      category: 'services',
    },
  ];

  keyPoints = [
    {
      point: "Understand and use essential tools for handling files, directories, command-line environments, and documentation."
    },
    {
      point: "Operate running systems, including booting into different run levels, identifying processes, starting and stopping virtual machines, and controlling services."
    },
    {
      point: "Configure local storage using partitions and logical volumes."
    },
    {
      point: "Create and configure file systems and file system attributes, such as permissions, encryption, access control lists, and network file systems."
    },
    {
      point: "Deploy, configure, and maintain systems, including software installation, update, and core services."
    },
    {
      point: "Manage users and groups, including use of a centralized directory for authentication."
    },
    {
      point: "Manage security, including basic firewall and SELinux configuration."
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

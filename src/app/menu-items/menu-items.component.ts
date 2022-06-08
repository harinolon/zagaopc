import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {
  menuList = [
    {
      name: 'About',
      link: 'about',
      enabled: true
    },
    {
      name: 'Services',
      link: 'services',
      enabled: true
    },
    {
      name: 'RedHat Certification & Training',
      link: 'redhatCerts',
      enabled: true
    },
    {
      name: 'Developer Training',
      link: 'devTraining',
      enabled: true
    },
    {
      name: 'Portfolio',
      link: 'portfolio',
      enabled: false
    },
    {
      name: 'Careers',
      link: 'careers',
      enabled: true
    },
    {
      name: 'Contact',
      link: 'contact',
      enabled: true
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  



  //add a functionality like if enabled is true, then add into the menu list array...
}

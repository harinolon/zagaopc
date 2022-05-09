import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {
  menuList = [
    {
      name: 'About',
      link: '/about',
      enabled: true
    },
    {
      name: 'Services',
      link: '/services',
      enabled: true
    },
    {
      name: 'RedHat Certification & Training',
      link: '/redhat-certs',
      enabled: true
    },
    {
      name: 'Developer Training',
      link: '/developer-training',
      enabled: true
    },
    {
      name: 'Portfolio',
      link: '/portfolio',
      enabled: false
    },
    {
      name: 'Careers',
      link: '/careers',
      enabled: true
    },
    {
      name: 'Contact',
      link: '/contact',
      enabled: true
    }
  ];
  navbarFixed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // onScroll(event: any) {
  //   if (event.target.scrollTop > 100) {
  //     console.log(event.target.scrollTop);
  //     this.navbarFixed = true;
  //   } else {
  //     this.navbarFixed = false;
  //   }
  // }
  // onScroll(event: any) {
  //   if (event.target.scrollTop > 100) {
  //     console.log(event.target.scrollTop);
  //     this.navbarFixed = true;
  //   } else {
  //     this.navbarFixed = false;
  //   }
  // }

  // @HostBinding('class.fixed')
  // navbarFixed!: boolean;

  // @HostListener('window:scroll') onScroll() {
  //   if (window.scrollY >= 50) {
  //     console.log(window.scrollY)
  //     this.navbarFixed = true;
  //   }
  //   else {
  //     this.navbarFixed = false;
  //   }
  // }



  //add a functionality like if enabled is true, then add into the menu list array...
}

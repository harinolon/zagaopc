import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../apiServices/api-services.service';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {
  // menuList:any = [];
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
      link: 'career',
      enabled: false
    },
    {
      name: 'Contact',
      link: 'contact',
      enabled: true
    }
  ];
  menuList1:any = [];
  menuData:any;

  constructor(private api: ApiServicesService) { }

  ngOnInit(): void {
    this.menuList.filter((item) => item.enabled).forEach(item => {
      this.menuList1.push(item);
    });

    // this.api.getMenuList("menu","ZagaInformation").subscribe((data) => {
    //   this.menuData = data;
    //   this.menuList = this.menuData.Menu.menuList;
    //   this.menuList.filter((item:any) => item.enabled).forEach((item:any) => {
    //     this.menuList1.push(item);
    //   });
    //   console.log(this.menuList);
    // });
           

  }

  



  //add a functionality like if enabled is true, then add into the menu list array...
}

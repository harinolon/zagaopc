import { Component, Input, OnInit } from '@angular/core';
import { ApiServicesService } from '../apiServices/api-services.service';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {
  @Input() isRootNode = false;
  // menuList = [
  //   {
  //     name: 'Home',
  //     link: '/',
  //     subList: [],
  //     subListEnabled: false,
  //     enabled: true
  //   },
  //   {
  //     name: 'About',
  //     // link: 'about',
  //     subList: [
  //       {
  //         "name": "Our Company",
  //         "link": "ourCompany"
  //       },
  //       {
  //         "name": "Management Team",
  //         "link": "managementTeam"
  //       }
  //     ],
  //     subListEnabled: true,
  //     enabled: true
  //   },
  //   {
  //     name: 'Services',
  //     link: 'services',
  //     subList: [],
  //     subListEnabled: false,
  //     enabled: true
  //   },
  //   {
  //     name: 'RedHatCertification',
  //     link: 'redhatCerts',
  //     subList: [],
  //     subListEnabled: false,
  //     enabled: true
  //   },
  //   {
  //     name: 'Developer Training',
  //     link: 'devTraining',
  //     subList: [],
  //     subListEnabled: false,
  //     enabled: false
  //   },
  //   {
  //     name: 'Portfolio',
  //     link: 'portfolio',
  //     subList: [],
  //     subListEnabled: false,
  //     enabled: false
  //   },
  //   {
  //     name: 'Profile',
  //     link: 'profile',
  //     subList: [],
  //     subListEnabled: false,
  //     enabled: true
  //   },
  //   {
  //     name: 'Resources',
  //     link: 'resource',
  //     subList: [],
  //     subListEnabled: false,
  //     enabled:true
  //   },
  //   {
  //     name: 'Careers',
  //     link: 'career',
  //     subList: [],
  //     subListEnabled: false,
  //     enabled: false
  //   },
  //   {
  //     name: 'Contact',
  //     link: 'contact',
  //     subList: [],
  //     subListEnabled: false,
  //     enabled: true
  //   }
  // ];
  menuList:any = [];
  menuList1:any = [];
  menuData:any;
  navClass1:any;
  mobileToggle:boolean = false;
  MatValue:any;

  constructor(private api: ApiServicesService) { }

  ngOnInit(): void {
    // this.menuList.filter((item) => item.enabled).forEach(item => {
    //   if(item.subListEnabled){
    //     this.MatValue = `[matMenuTriggerFor]="menu"`;
    //   }
    //   else {
    //     this.MatValue = "";
    //   }
      
    // });

    this.api.getMenuList("menu","ZagaInformation").subscribe((data) => {
      this.menuData = data;
      this.menuList = this.menuData.Menu.menuList;
      this.menuList.filter((item:any) => item.enabled).forEach((item:any) => {
        this.menuList1.push(item);
      });
      console.log(this.menuList);
    });
    
           

  }

  onHandleService(){
    this.mobileToggle = !this.mobileToggle;
    if(this.mobileToggle){
      this.navClass1 = "responsive";
    }
    else{
      this.navClass1 = "";
    }
  }

  



  //add a functionality like if enabled is true, then add into the menu list array...
}

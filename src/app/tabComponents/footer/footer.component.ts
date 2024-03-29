import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/apiServices/api-services.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // IndianFlag:any = "../../assets/IndianFlag.png";
  // UsFlag:any = "../../assets/USAFlag.png";
  flags:any = [
    // {
    //   flag: "../../assets/india-flag-1900.png",
    //   style: "height:40px;width:50px",
    // },
    // {
    //   flag: "../../assets/purepng.com-american-flagflagscountrylandflag-831523995311m0uxm.png",
    //   style: "height:40px;width:50px",
    // },
    // {
    //   flag: "../../assets/t_singapore-large-flag-7409.png",
    //   style: "height:40px;width:50px;",
    // }

  ];
  menuItems:any = [
    // {
    //   "name": "Zaga open source technology",
    //   "link": "#"
    // },
    // {
    //   "name":"RedHat Certification",
    //   "link": "redhatCerts"
    // },
    // {
    //   "name":"About",
    //   "link": "about"
    // },
    // {
    //   "name":"Services",
    //   "link": "services"
    // }
    // ,
    // {
    //   "name":"Privacy Policy",
    //   "link": "#"
    // }
  ];
  socialLinks:any = [
    // {
    //   "name": "Facebook",
    //   "link": "https://www.facebook.com/",
    //   "icon": "fab fa-facebook-f"
    // },
    // {
    //   "name": "Twitter",
    //   "link": "https://twitter.com/",
    //   "icon": "fab fa-twitter"
    // },
    // {
    //   "name": "LinkedIn",
    //   "link": "https://www.linkedin.com/",
    //   "icon": "fab fa-linkedin-in"
    // },
    // {
    //   "name":"Contact",
    //   "link": "#",
    //   "icon": "fa fa-envelope"
    // }
  ];
  // socialLinks:any = []
  // menuItems:any = [];
  // flags:any = [];
  constructor(private apiCall:ApiServicesService) { }

  ngOnInit(): void {
    this.apiCall.getMenuList("footer","ZagaInformation").subscribe((data:any) => {
      this.socialLinks = data.socialLinks;
      this.menuItems = data.menuItems;
      this.flags = data.flagImage;
    }
    );
  }

}

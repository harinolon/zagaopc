import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../apiServices/api-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slides:any = [
    { img: "../../assets/pexels-christina-morillo-1181244.jpg",
      title: "Zaga Open source",
      text: "Solutions provider founded by IT Industry exposed Technologists. We provide application modernization solutions for our clients and also offer training for students and working professionals to update their knowledge in IT field.",
      color: "#fff",
      enabled:true
    },
    // { img: "../../assets/pexels-fauxels-3182773.jpg",
    //   title: "Second slide label",
    //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //   color: "#fff",
    //   enabled:true
    // },
    // { img: "../../assets/pexels-pixabay-60504.jpg",
    //   title: "Third slide label",
    //   text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur." ,
    //   color: "#fff",
    //   enabled:true
    // },
    // { img: "../../assets/pexels-thisisengineering-3861943.jpg",
    //   title: "Fourth slide label",
    //   text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    //   color: "#fff"
    // }
  ]
  getData:any;
  redhatLogo?:string;

  constructor(private apiCall: ApiServicesService) { }


  ngOnInit(): void {
    this.apiCall.getMenuList("dailyUpdates","ZagaInformation").subscribe((data:any) => {
      this.getData = data.dailyUpdates;
      this.redhatLogo = data.redhatLogo;
      this.getData.forEach((item:any) => {
        this.slides = [...this.slides, item];
      });
      console.log(this.slides);
    });
  }
    

  

}

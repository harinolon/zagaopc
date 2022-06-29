import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../apiServices/api-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slides = [
    { img: "../../assets/pexels-christina-morillo-1181244.jpg",
      title: "First slide label",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      color: "#fff",
      enabled:true
    },
    // { img: "../../assets/pexels-fauxels-3182773.jpg",
    //   title: "Second slide label",
    //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //   color: "#fff"
    // },
    // { img: "../../assets/pexels-pixabay-60504.jpg",
    //   title: "Third slide label",
    //   text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur." ,
    //   color: "#fff"
    // },
    // { img: "../../assets/pexels-thisisengineering-3861943.jpg",
    //   title: "Fourth slide label",
    //   text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    //   color: "#fff"
    // }
  ]
  getData:any;

  constructor(private apiCall: ApiServicesService) { }


  ngOnInit(): void {
    this.apiCall.getMenuList("dailyUpdates","ZagaInformation").subscribe((data:any) => {
      this.getData = data.dailyUpdates;
      this.getData.forEach((item:any) => {
        this.slides = [...this.slides, item];
      });
      console.log(this.slides);
    });
  }
    

  

}

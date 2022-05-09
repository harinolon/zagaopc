import { Component, OnInit } from '@angular/core';

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
      color: "#fff"
    },
    { img: "../../assets/pexels-fauxels-3182773.jpg",
      title: "Second slide label",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      color: "#fff"
    },
    { img: "../../assets/pexels-pixabay-60504.jpg",
      title: "Third slide label",
      text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur." ,
      color: "#fff"
    },
    { img: "../../assets/pexels-thisisengineering-3861943.jpg",
      title: "Fourth slide label",
      text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
      color: "#fff"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  expertDetails = [
    {
      name: 'HARIHARAN',
      title: 'SENIOR SOFTWARE ENGINEER',
      linkedInUrl: 'https://www.linkedin.com/in/hariharan-p-0b32a51b0/',
      imageUrl: '../../../assets/image2.jpg',
    },
    {
      name: 'SHARANYA',
      title: 'SENIOR SOFTWARE ENGINEER',
      linkedInUrl: 'https://www.linkedin.com/in/johndoe/',
      imageUrl: '../../../assets/pexels-pixabay-60504.jpg',
    },
    {
      name: 'RAHGUL',
      title: 'Senior Software Engineer',
      linkedInUrl: 'https://www.linkedin.com/in/johndoe/',
      imageUrl: '../../../assets/pexels-pixabay-60504.jpg',
    },
    {
      name: 'ANUSHIYAAA MA',
      title: 'Senior Software Engineer',
      linkedInUrl: 'https://www.linkedin.com/in/johndoe/',
      imageUrl: '../../../assets/pexels-pixabay-60504.jpg',
    },
    {
      name: 'Jane Doe',
      title: 'Senior Software Engineer',
      linkedInUrl: 'https://www.linkedin.com/in/johndoe/',
      imageUrl: '../../../assets/pexels-pixabay-60504.jpg',
    },
    {
      name: 'Jane Doe',
      title: 'Senior Software Engineer',
      linkedInUrl: 'https://www.linkedin.com/in/johndoe/',
      imageUrl: '../../../assets/pexels-pixabay-60504.jpg',
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}

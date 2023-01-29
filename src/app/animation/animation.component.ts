import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss']
})
export class AnimationComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.route.navigate(["/certification"]);
  }, 2000);
  }
  
}

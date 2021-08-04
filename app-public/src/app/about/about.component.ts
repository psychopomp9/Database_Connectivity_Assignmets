import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pageContent = {
    header: {
      title: 'About my site'
    },
    body: 'Discover mangas, make a purchase, and track your progress.'
  }

}

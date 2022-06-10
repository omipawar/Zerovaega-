import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class Blogs implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'latestproducts',
  templateUrl: './latestproducts.component.html',
  styleUrls: ['./latestproducts.component.css']
})
export class LatestproductsComponent implements OnInit {

  scrollValue:any

  constructor() {}

  ngOnInit(): void {
  }

  nextButton(event:any){
    let scrollElement = event.srcElement.parentElement.parentElement
    scrollElement.scrollLeft += 500;
    this.scrollValue = scrollElement.scrollLeft;
  }
  
  prevButton(event:any){
    let scrollElement = event.srcElement.parentElement.parentElement
    scrollElement.scrollLeft -= 500;
    this.scrollValue = scrollElement.scrollLeft;
  }
}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bestoffers',
  templateUrl: './bestoffers.component.html',
  styleUrls: ['./bestoffers.component.css']
})
export class BestoffersComponent implements OnInit {
  scrollValue: any
  constructor() { }

  ngOnInit(): void {
  }
  nextButton(event: any) {
    let scrollElement = event.srcElement.parentElement.parentElement
    scrollElement.scrollLeft += 500;
    this.scrollValue = scrollElement.scrollLeft;
  }

  prevButton(event: any) {
    let scrollElement = event.srcElement.parentElement.parentElement
    scrollElement.scrollLeft -= 500;
    this.scrollValue = scrollElement.scrollLeft;
  }
}

export function nextButton(event:any){
    let scrollElement = event.srcElement.parentElement.parentElement
    scrollElement.scrollLeft += 500;
    this.scrollValue = scrollElement.scrollLeft;
  }

export function prevButton(event:any){
    let scrollElement = event.srcElement.parentElement.parentElement
    scrollElement.scrollLeft -= 500;
    this.scrollValue = scrollElement.scrollLeft;
  }
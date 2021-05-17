import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shopbycategory',
  templateUrl: './shopbycategory.component.html',
  styleUrls: ['./shopbycategory.component.css']
})
export class ShopbycategoryComponent implements OnInit {

  items: any=[];
  selectedIndex:number = 0;
  finalIndex:number = 10;
  presentData:any = []
  scrollValue:number = 0;
  constructor() { }

  ngOnInit(){
    // this.items = ["item1","item2","item3","item4","item5","item6","item7","item8","item9",
    // "item21","item10","item11","item12","item13","item14","item15","item16","item17","item18","item19","item20"]

    this.items = [
      {
        'image':'assets/category/clothing.jpg',
        'productName':'Clothings',
        'price':50
      },
      {
        'image':'assets/category/electronics.jpg',
        'productName':'Eelectronics',
        'price':50
      },
      {
        'image':'assets/category/furniture.jpg',
        'productName':'Furniture',
        'price':50
      },
      {
        'image':'assets/category/gaming.jpg',
        'productName':'Gaming',
        'price':50
      },
      {
        'image':'assets/category/grocerry.png',
        'productName':'Greocerry',
        'price':50
      },
      {
        'image':'assets/category/styling.png',
        'productName':'Greocerry',
        'price':50
      },
      {
        'image':'assets/category/gaming.jpg',
        'productName':'Gaming',
        'price':50
      },
      {
        'image':'assets/category/grocerry.png',
        'productName':'Greocerry',
        'price':50
      },
      {
        'image':'assets/category/styling.png',
        'productName':'Greocerry',
        'price':50
      },
      // {
      //   'image':'assets/products/Galaxy Buds Live_product image (5).jpg',
      //   'productName':'Galaxy Air Pods1',
      //   'price':50
      // },
      // {
      //   'image':'assets/products/Galaxy Buds Live_product image (5).jpg',
      //   'productName':'Galaxy Air Pods2',
      //   'price':50
      // },
      // {
      //   'image':'assets/products/Galaxy Buds Live_product image (5).jpg',
      //   'productName':'Galaxy Air Pods3',
      //   'price':50
      // },
      // {
      //   'image':'assets/products/Galaxy Buds Live_product image (5).jpg',
      //   'productName':'Galaxy Air Pods4',
      //   'price':50
      // },
      // {
      //   'image':'assets/products/Galaxy Buds Live_product image (5).jpg',
      //   'productName':'Galaxy Air Pods5',
      //   'price':50
      // },
      // {
      //   'image':'assets/products/Galaxy Buds Live_product image (5).jpg',
      //   'productName':'Galaxy Air Pods1',
      //   'price':50
      // },
      // {
      //   'image':'assets/products/Galaxy Buds Live_product image (5).jpg',
      //   'productName':'Galaxy Air Pods2',
      //   'price':50
      // },
      // {
      //   'image':'assets/products/Galaxy Buds Live_product image (5).jpg',
      //   'productName':'Galaxy Air Pods3',
      //   'price':50
      // },
      // {
      //   'image':'assets/products/Galaxy Buds Live_product image (5).jpg',
      //   'productName':'Galaxy Air Pods4',
      //   'price':50
      // },
      // {
      //   'image':'assets/products/Galaxy Buds Live_product image (5).jpg',
      //   'productName':'Galaxy Air Pods5r wer',
      //   'price':50
      // },
      // {
      //   'image':'assets/products/Galaxy Buds Live_product image (5).jpg',
      //   'productName':'Galaxy Air Pods1werar',
      //   'price':50
      // },
      // {
      //   'image':'assets/products/Galaxy Buds Live_product image (5).jpg',
      //   'productName':'Galaxy Air Podsewr we',
      //   'price':50
      // },
      // {
      //   'image':'assets/products/Galaxy Buds Live_product image (5).jpg',
      //   'productName':'Galaxy Air Podsefewre',
      //   'price':50
      // },
      // {
      //   'image':'assets/products/Galaxy Buds Live_product image (5).jpg',
      //   'productName':'Galaxy Air Podsdasdas',
      //   'price':50
      // },
      // {
      //   'image':'assets/products/Galaxy Buds Live_product image (5).jpg',
      //   'productName':'Galaxy Air Podsdasdsa',
      //   'price':50
      // }
    ]
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

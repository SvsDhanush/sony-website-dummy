import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promotion-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.css']
})
export class PromotionListComponent implements OnInit {
  promotions = [
    {
      title: '50% Off on Sony Headphones',
      description: 'Enjoy half price on all Sony noise-canceling headphones. Limited time offer!',
      image: 'assets/productDisplay/headphones.jpg'
    },
    {
      title: 'Buy One, Get One Free - Sony TV',
      description: 'Buy any Sony 4K TV and get a second one for free!',
      image: 'assets/productDisplay/tv.jpg'
    },
    {
      title: 'Free Delivery on All Sony Products',
      description: 'Enjoy free delivery on all Sony products ordered online.',
      image: 'assets/carousel/OP.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

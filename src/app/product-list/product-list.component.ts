import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [
    { name: 'Sony TV', description: '4K Ultra HD', image: 'assets/productDisplay/tv.jpg', price: 799.99 },
    { name: 'Sony Headphones', description: 'Noise Cancelling', image: 'assets/productDisplay/headphones.jpg', price: 299.99 },
    { name: 'Sony Camera', description: 'Mirrorless Camera', image: 'assets/productDisplay/camera.jpg', price: 1499.99 },
    { name: 'Sony TV', description: '4K Ultra HD', image: 'assets/productDisplay/tv.jpg', price: 799.99 },
    { name: 'Sony Headphones', description: 'Noise Cancelling', image: 'assets/productDisplay/headphones.jpg', price: 299.99 },
    { name: 'Sony TV', description: '4K Ultra HD', image: 'assets/productDisplay/tv.jpg', price: 799.99 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // Scroll to the left
  scrollLeft() {
    const container = document.querySelector('.product-list') as HTMLElement;
    container.scrollLeft -= 200;  // Adjust scroll distance as needed
  }

  // Scroll to the right
  scrollRight() {
    const container = document.querySelector('.product-list') as HTMLElement;
    container.scrollLeft += 200;  // Adjust scroll distance as needed
  }
}

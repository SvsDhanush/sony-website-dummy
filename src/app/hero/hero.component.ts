import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  slides = [
    {
      image: "../assets/carousel/eiq2fsony.jpg",
      title: 'Product 1',
      description: 'Discover the latest Sony technology with our top-rated products.'
    },
    {
      image: "../assets/carousel/OP.jpg",
      title: 'Product 2',
      description: 'Explore high-quality audio and visual experiences like never before.'
    },
    {
      image: "../assets/carousel/eiq2fsony.jpg",
      title: 'Product 3',
      description: 'Innovative design and performance for the modern lifestyle.'
    }
  ];

}

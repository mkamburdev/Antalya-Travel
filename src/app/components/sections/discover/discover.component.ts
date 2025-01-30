import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DiscoverCard {
  image: string;
  title: string;
}

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.scss'
})
export class DiscoverComponent {
  cards: DiscoverCard[] = [
    { image: 'assets/img/hotel.jpg', title: 'HOTELS' },
    { image: 'assets/img/restaurants.jpg', title: 'RESTAURANTS' },
    { image: 'assets/img/spa.jpg', title: 'SPAS & BEAUTY' },
    { image: 'assets/img/beach.jpg', title: 'BEACHES' },
    { image: 'assets/img/bars.jpg', title: 'BARS' },
    { image: 'assets/img/watersport.jpg', title: 'WATER SPORTS' },
    { image: 'assets/img/wedding.jpg', title: 'WEDDINGS' },
    { image: 'assets/img/sunset.jpg', title: 'SUNSETS' },
    { image: 'assets/img/history.jpg', title: 'HISTORY' },
    { image: 'assets/img/photo.jpg', title: 'PHOTO OPPORTUNITIES' },
    { image: 'assets/img/boats.jpg', title: 'BOATS' },
    { image: 'assets/img/todo.jpg', title: 'THINGS TO DO' }
  ];
}

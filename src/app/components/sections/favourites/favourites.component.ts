import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FavouriteCard {
  image: string;
  title: string;
  category: string;
  description: string;
}

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.scss'
})
export class FavouritesComponent {
  favourites: FavouriteCard[] = [
    {
      image: 'assets/img/card1.jpg',
      title: 'Kleopatra and Damlatas Beach',
      category: 'Beaches',
      description: 'Kleopatra and Damlataş Beaches offer golden sands and crystal-clear waters. Named after Cleopatra, the former is vibrant, while Damlataş, with its unique rocks, provides a serene retreat. Twin coastal gems, inviting visitors to embrace the Mediterranean\'s beauty.'
    },
    {
      image: 'assets/img/card2.jpg',
      title: 'Kaleici',
      category: 'Neighborhoods',
      description: 'Kaleiçi, Antalya\'s historic core, captivates with cobblestone streets, ancient houses, and Hadrian\'s Gate at its center. Ottoman-era charm, boutique shops, and a tranquil harbor create an unforgettable blend of history and culture.'
    },
    {
      image: 'assets/img/card3.jpg',
      title: 'Lower Duden Waterfalls',
      category: 'Waterfalls',
      description: 'Lower Duden Waterfalls, located near Antalya, cascade gracefully into the Mediterranean Sea, creating a mesmerizing spectacle of nature\'s beauty. The falls, surrounded by lush greenery, offer a serene escape and a perfect spot for relaxation and contemplation.'
    },
    {
      image: 'assets/img/card4.jpg',
      title: 'Perge Ancient City',
      category: 'Ancient Ruins',
      description: 'Perge, an ancient city near Antalya, enchants with its well-preserved ruins. Explore its amphitheater, agora, and intricate architecture, offering a glimpse into the past. Immerse yourself in history at Perge\'s archaeological marvels.'
    }
  ];
}

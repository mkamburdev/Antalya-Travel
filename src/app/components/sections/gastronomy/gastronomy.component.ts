import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GastronomySection {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-gastronomy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gastronomy.component.html',
  styleUrl: './gastronomy.component.scss'
})
export class GastronomyComponent {
  sections: GastronomySection[] = [
    {
      title: 'Local Tastes',
      description: 'Antalya is a Mediterranean city and is almost a vegetable and fruit paradise thanks to its suitable climatic conditions and fertile lands. Antalya Cuisine has a structure shaped by the products grown in the region, which contains many unique local recipes. Antalya offers delicious options for gourmets, a rich range of flavors brought to the gastronomy of Antalya by Cretans, Yoruks and Arabs, which still exist today.',
      image: 'assets/img/local-testes.jpg'
    },
    {
      title: 'Restaurants',
      description: 'Antalya has a rich culture in food and beverage. It has countless restaurants and restaurants serving food and beverage options that appeal to all tastes. Antalya is a paradise of vegetables and fruits. It also has a very rich range of meat and fish. During your visit to Antalya, you can encounter local products as well as the most well-known and loved flavors, as well as creative flavors that you have never known before.',
      image: 'assets/img/restaurant.jpg'
    },
    {
      title: 'Bistros & Cafes',
      description: 'Antalya has an active social life. It draws attention to lively and dynamic city life and being a tourist city. Bistros & cafes are visited to take a nice break from the hustle and bustle of daily life. They are the perfect places to get together with your loved ones, socialize and get out of the routine life. In addition to their delicious hot and cold drinks, bistros & cafes stand out with their unique tastes on their menus. Make sweet conversations with your friends and family much more privileged and special with their warm and friendly atmosphere as well as the individual tastes they offer.',
      image: 'assets/img/bistro.jpg'
    },
    {
      title: 'Coffee Shops',
      description: 'Coffee was discovered in the 8th century and entered these lands in 1517 during the Ottoman Empire through Yemen Governor Özdemir Pasha. It is a delicious beverage consumed with pleasure in Turkey and all over the world. This magical drink is a part of the traditions of the countries. It creates a culture with rituals and ceremonies handed down from generation to generation. It has an indispensable place in daily life and social life and significantly reinforces unity and solidarity. It provides socialization by integrating communities.',
      image: 'assets/img/coffee.jpg'
    }
  ];
}

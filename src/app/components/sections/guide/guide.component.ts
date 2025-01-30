import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Info {
  value: string;
  label: string;
}

@Component({
  selector: 'app-guide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guide.component.html',
  styleUrl: './guide.component.scss'
})
export class GuideComponent {
  infos: Info[] = [
    { value: '630 km', label: 'Coastline Length' },
    { value: '28.5°c', label: 'Average Temperature' },
    { value: '15M+', label: 'Average Annual Visitors' },
    { value: '200+', label: 'Blue Flag Awarded Beaches' }
  ];

  guideText: string[] = [
    'Antalya is the fastest-growing city in Turkey, and tourists from around the world are discovering its fabulous mix of great beaches and traditional Turkish culture. Kids will love the Beach Park, which features Aqua Land (a waterslide-fanatic\'s dream) and Dolphin Land (home to dolphins, sea lions and white whales). Make sure to explore the old town center and to see Hadrian\'s Gate.',
    'Beyond the sandy shores, Antalya boasts a vibrant culinary scene, where local delicacies and international flavors converge to tantalize taste buds. Indulge in a culinary journey through the bustling bazaars and waterfront restaurants, savoring the distinct flavors of Turkish cuisine. Antalya, with its captivating landscapes, cultural richness, and lively ambiance, invites travelers to explore beyond the ordinary and discover the myriad facets that make it a truly remarkable destination.'
  ];
}

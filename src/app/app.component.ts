import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FavouritesComponent } from './components/sections/favourites/favourites.component';
import { GuideComponent } from './components/sections/guide/guide.component';
import { DiscoverComponent } from './components/sections/discover/discover.component';
import { GastronomyComponent } from './components/sections/gastronomy/gastronomy.component';
import { ContactComponent } from './components/sections/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FavouritesComponent,
    GuideComponent,
    DiscoverComponent,
    GastronomyComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'antalya-travel';
}

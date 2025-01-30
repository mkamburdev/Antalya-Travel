import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FavouritesComponent } from '../sections/favourites/favourites.component';
import { GuideComponent } from '../sections/guide/guide.component';
import { DiscoverComponent } from '../sections/discover/discover.component';
import { GastronomyComponent } from '../sections/gastronomy/gastronomy.component';
import { ContactComponent } from '../sections/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    FavouritesComponent,
    GuideComponent,
    DiscoverComponent,
    GastronomyComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}

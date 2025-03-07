import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  imports: [CarouselModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "../components/nav-bar/nav-bar.component";
import { NgxSpinnerComponent } from 'ngx-spinner';
import { SectionHeaderComponent } from "../components/section-header/section-header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, NgxSpinnerComponent, SectionHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
}

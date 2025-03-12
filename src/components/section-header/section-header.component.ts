import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreadcrumbComponent, BreadcrumbService } from 'xng-breadcrumb';


@Component({
  selector: 'app-section-header',
  imports: [CommonModule, BreadcrumbComponent],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss'
})

export class SectionHeaderComponent implements OnInit {

  breadcrumb$!: Observable<any[]>;
  constructor(private bcService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumb$ = this.bcService.breadcrumbs$;
  }
}

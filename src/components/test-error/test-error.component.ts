import { Component } from '@angular/core';
import { BuggyService } from '../../core/services/buggy.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-test-error',
  imports: [CommonModule],
  templateUrl: './test-error.component.html',
  styleUrl: './test-error.component.scss'
})
export class TestErrorComponent {
  validationErrors: string[] = [];

  constructor(private buggyService: BuggyService, private toastr: ToastrService) { }

  get404Error() {
    this.buggyService.get404Error().subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    });
  }

  get400Error() {
    this.buggyService.get400Error().subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    });
  }

  get401Error() {
    this.buggyService.get401Error().subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    });
  }

  get500Error() {
    this.buggyService.get500Error().subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    });
  }

  get400ValidationError() {
    this.buggyService.get400ValidationError().subscribe({
      next: response => console.log(response),
      error: error => this.validationErrors = error.errors
    });
  }
}

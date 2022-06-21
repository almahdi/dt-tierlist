import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="sticky w-full top-0 z-10 bg-white">
      <mat-toolbar color="primary">
        <span>DT Rating System</span>
      </mat-toolbar>
      <mat-toolbar-row class="flex gap-3 mat-elevation-z3">
        <a mat-button color="primary">Home</a>
        <button mat-button>About</button>
      </mat-toolbar-row>
    </div>
  `,
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
  ],
})
export class NavbarComponent {
  constructor() {}
}

import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="sticky w-full top-0 z-10 bg-white">
      <mat-toolbar color="primary">
        <span>DT Tier List</span>
      </mat-toolbar>
      <mat-toolbar-row class="flex gap-3 mat-elevation-z3">
        <a mat-button routerLinkActive="mat-primary" [routerLinkActiveOptions]="{exact: true}" [routerLink]="['/']">Home</a>
        <button mat-button routerLinkActive="mat-primary" [routerLink]="['/about']">About</button>
      </mat-toolbar-row>
    </div>
  `,
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
  ],
})
export class NavbarComponent {
  constructor() {}
}

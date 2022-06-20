import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  templateUrl: './main.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
  ],
})
export class MainPageComponent implements OnInit {
  items = [...Array(100)].map((_, i) => i);
  constructor() {}
  ngOnInit(): void {}
  onSubmit(model: any) {
    console.log({ model });
  }
}

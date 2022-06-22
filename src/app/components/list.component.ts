import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

export interface ICategory {
  name: String;
  color: String;
  items: String[];
}

@Component({
  selector: 'app-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    DragDropModule,
  ],
})
export class ListComponent {
  @Input() items: String[] = []; /* Items passed from the child component */
  categories: ICategory[] = [ /* List of Categories, shall be customizable later with a form, but for now, its a variable */
    {
      name: 'Great',
      color: '#eb3333',
      items: [],
    },
    {
      name: 'Good',
      color: '#e5672a',
      items: [],
    },
    {
      name: 'Ok',
      color: '#d1bf37',
      items: [],
    },
    {
      name: 'MEH',
      color: '#329832',
      items: [],
    },
    {
      name: 'Yuck',
      color: '#3aa3a9',
      items: [],
    },
  ];
  fullPage = false;

  constructor(private doms: DomSanitizer) {}

  getStyle(category: ICategory) {
    return this.doms.bypassSecurityTrustStyle(
      `background-color: ${category.color};`
    );
  }
  onDrop(event: CdkDragDrop<String[]>) {
    console.log(event);
   if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  reset() {
    this.categories.forEach(category=>category.items = []);
  }
  toggleFullPage() {
    this.fullPage = !this.fullPage;
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputsFormComponent } from 'src/app/components/inputs-form.component';
import { DomSanitizer } from '@angular/platform-browser';
import { MatChipsModule } from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

export interface ICategory {
  name: String;
  color: String;
  items: String[];
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatButtonModule,
    InputsFormComponent,
    DragDropModule,
  ],
})
export class MainPageComponent {
  items: String[] = ["test", "awesome", "xmonad", "qtile"]; /* Items passed from the child component */
  categories: ICategory[] = [ /* List of Categories, shall be customizable later with a form, but for now, its a variable */
    {
      name: 'Great',
      color: '#eb3333',
      items: ["tttt", "vvvv"],
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
  constructor(private doms: DomSanitizer) {}

  getStyle(category: ICategory) {
    return this.doms.bypassSecurityTrustStyle(
      `background-color: ${category.color};`
    );
  }

  itemsChangedHandler(items: String[]) {
    this.items = [...items];
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

}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputsFormComponent } from 'src/app/components/inputs-form.component';
import { DomSanitizer } from '@angular/platform-browser';
import { MatChipsModule } from '@angular/material/chips';

export interface ICategory {
  name: string;
  color: string;
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
    InputsFormComponent,
  ],
})
export class MainPageComponent {
  items: String[] = []; /* Items passed from the child component */
  categories: ICategory[] = [ /* List of Categories, shall be customizable later with a form, but for now, its a variable */
    {
      name: 'Great',
      color: '#eb3333',
    },
    {
      name: 'Good',
      color: '#e5672a',
    },
    {
      name: 'Ok',
      color: '#d1bf37',
    },
    {
      name: 'MEH',
      color: '#329832',
    },
    {
      name: 'Yuck',
      color: '#3aa3a9',
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

}

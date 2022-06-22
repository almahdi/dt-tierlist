import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputsFormComponent } from 'src/app/components/inputs-form.component';
import { ListComponent } from 'src/app/components/list.component';

@Component({
  selector: 'app-main-page',
  template: `
    <!-- Data Form -->
    <app-inputs-form
      (itemsChanged)="itemsChangedHandler($event)">
    </app-inputs-form>
    <!-- Rating Component -->
    <app-list [items]="items"></app-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    InputsFormComponent,
    ListComponent,
  ],
})
export class MainPageComponent {
  items: String[] = []; /* Items passed from the child component */

  itemsChangedHandler(items: String[]) {
    this.items = [...items];
  }
}

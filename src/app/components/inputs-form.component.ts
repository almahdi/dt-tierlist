import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { COMMA, ENTER } from '@angular/cdk/keycodes';



@Component({
  selector: 'app-inputs-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
<mat-form-field class="w-full" appearance="fill">
  <mat-label>Items List</mat-label>
  <mat-chip-list #chipList aria-label="Fruit selection">
    <mat-chip *ngFor="let item of items" (removed)="remove(item)">
      {{item}}
      <button matChipRemove>
        <mat-icon>cancel</mat-icon>
      </button>
    </mat-chip>
    <input placeholder="New item..."
           [matChipInputFor]="chipList"
           [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
           [matChipInputAddOnBlur]="addOnBlur"
           (matChipInputTokenEnd)="add($event)">
  </mat-chip-list>
</mat-form-field>
  `,
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
  ],
})
export class InputsFormComponent {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  items: String[] = []; //This is where the list of Products will be

  constructor() {}
  ngOnInit(): void {}

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.items.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(item: String): void {
    const index = this.items.indexOf(item);

    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }

}

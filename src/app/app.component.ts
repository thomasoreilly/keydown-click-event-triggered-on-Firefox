import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <button (keydown)="toggleCheckbox()">Toggle checkbox</button>
    </div>
    <div *ngIf="renderCheckbox">
      <input
        id="myCheckbox"
        type="checkbox"
        #selectAll
        [checked]="allItemsSelected"
        [indeterminate]="someItemsSelected"
        (click)="onSelectAll($event)"
      />
      <label for="myCheckbox">Checkbox</label>
    </div>
    <button (click)="focusCheckbox()">Focus checkbox</button>
  `,
  styles: [
    `
      input[type='checkbox'] {
        position: relative;
        width: 1em;
        height: 1em;
        border: 1px solid blue;
        vertical-align: -2px;
        color: green;
      }
    `
  ]
})
export class AppComponent {
  allItemsSelected = false;
  someItemsSelected = false;
  renderCheckbox = false;
  @ViewChild('selectAll', { read: ElementRef }) selectAll: ElementRef;

  onSelectAll(e) {
    console.log(e);
  }

  focusCheckbox() {
    this.selectAll.nativeElement.focus();
  }

  toggleCheckbox() {
    this.renderCheckbox = !this.renderCheckbox;
    setTimeout(() => {
      this.selectAll?.nativeElement.focus();
    });
  }
}

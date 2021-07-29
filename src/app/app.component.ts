import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `   
    <button (keydown)="toggleCheckbox()">Toggle with space key</button>
    <div *ngIf="renderCheckbox">
      <input
        type="checkbox"
        #selectAll
        (click)="onSelectAll($event)"
      />
      <label for="myCheckbox">Checkbox</label>
    </div>
  `,
})
export class AppComponent {
  renderCheckbox = false;
  @ViewChild('selectAll', { read: ElementRef }) selectAll: ElementRef;

  onSelectAll(e: MouseEvent | KeyboardEvent) {
    console.log(e);
  }


  toggleCheckbox() {
    this.renderCheckbox = !this.renderCheckbox;
    setTimeout(() => {
      this.selectAll?.nativeElement.focus();
    });
  }
}

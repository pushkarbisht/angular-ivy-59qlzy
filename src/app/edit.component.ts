import { Component, EventEmitter, Input, Output, VERSION } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
})
export class EditComponent {
  @Output() nameChanged = new EventEmitter<string>();
  @Input() name = '';

  submit() {
    console.log('data changed in child');
    this.nameChanged.emit(this.name);
  }
}

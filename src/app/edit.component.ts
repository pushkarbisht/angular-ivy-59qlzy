import { Component, EventEmitter, Input, Output, VERSION } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
})
export class EditComponent {
  @Output() nameChanged = new EventEmitter<any>();
  @Input() name;
  @Input() age;

  submit() {
    console.log('data changed in child');
    this.nameChanged.emit({ name: this.name, age: this.age });
  }
}

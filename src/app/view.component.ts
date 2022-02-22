import { Component, EventEmitter, Input, Output, VERSION } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
})
export class ViewComponent {
  @Input() name;
  @Input() age;
  @Output() startedit = new EventEmitter<any>();

  edit(){
    this.startedit.emit();

  }
}

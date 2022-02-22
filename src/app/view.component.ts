import { Component, Input, VERSION } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
})
export class ViewComponent {
  @Input() name;
  @Input() age;
}

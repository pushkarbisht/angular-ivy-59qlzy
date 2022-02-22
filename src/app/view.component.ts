import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'view',
  templateUrl: './view.component.html',
})
export class ViewComponent {
  name = 'Angular ' + VERSION.major;
}

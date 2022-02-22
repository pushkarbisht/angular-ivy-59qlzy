import {
  Component,
  ComponentRef,
  VERSION,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { EditComponent } from './edit.component';
import { ViewComponent } from './view.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('container', { static: true, read: ViewContainerRef })
  entry: ViewContainerRef;
  name = 'Pushkar';
  constructor(private viewContainerRef: ViewContainerRef) {
    //    this.viewContainerRef.createComponent(ViewComponent);
    let component: ComponentRef<ViewComponent> =
      this.viewContainerRef.createComponent(ViewComponent);
    component.instance.name = this.name;
  }
  edit() {
    this.viewContainerRef.clear();
    let component: ComponentRef<EditComponent> =
      this.viewContainerRef.createComponent(EditComponent);
    component.instance.name = this.name;
    component.instance.nameChanged.subscribe((msg) => this.dataChanged(msg));
  }
  dataChanged(e) {
    this.name = e;
    this.viewContainerRef.clear();
    let component: ComponentRef<ViewComponent> =
      this.viewContainerRef.createComponent(ViewComponent);
    component.instance.name = this.name;
  }
}

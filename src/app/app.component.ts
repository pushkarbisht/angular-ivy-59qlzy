import { Component, ViewChild } from '@angular/core';
import { EditComponent } from './edit.component';
import { ViewComponent } from './view.component';
import { ProfileDirective } from './profile.directive';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(ProfileDirective, { static: true }) profileHost!: ProfileDirective;
  name = 'Pushkar';
  age = 29;
  ngOnInit(): void {
    this.view();
  }
  edit() {
    let viewContainerRef = this.profileHost.viewContainerRef;
    viewContainerRef.clear();
    let componentRef =
      viewContainerRef.createComponent<EditComponent>(EditComponent);
    componentRef.instance.name = this.name;
    componentRef.instance.age = this.age;
    componentRef.instance.nameChanged.subscribe((msg) => this.dataChanged(msg));
  }
  view() {
    let viewContainerRef = this.profileHost.viewContainerRef;
    viewContainerRef.clear();
    let componentRef =
      viewContainerRef.createComponent<ViewComponent>(ViewComponent);
    componentRef.instance.name = this.name;
    componentRef.instance.age = this.age;
    componentRef.instance.startedit.subscribe((msg) => this.edit());
  }
  dataChanged(e) {
    this.name = e.name;
    this.age = e.age;
    this.view();
  }
}

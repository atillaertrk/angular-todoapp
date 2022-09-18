import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  model = new Model();
  isDisplay = false;

  getName() {
    return this.model.user + "'s";
  }
  getItems() {
    if (this.isDisplay) {
      return this.model.items;
    } else {
      return this.model.items.filter((items) => !items.action);
    }
  }
  addItem(value: any) {
    if (value != '') {
      this.model.items.push(new TodoItem(value, false));
    }
  }
}

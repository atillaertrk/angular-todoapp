export class Model {
  user;
  items;
  constructor() {
    this.user = 'Atilla';
    this.items = [
      new TodoItem('kahvaltı', false),
      new TodoItem('spor', false),
      new TodoItem('yemek', false),
      new TodoItem('balık', false),
    ];
  }
}
export class TodoItem {
  description;
  action;
  constructor(description: any, action: boolean) {
    this.description = description;
    this.action = action;
  }
}

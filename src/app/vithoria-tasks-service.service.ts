import { Injectable } from '@angular/core';

@Injectable()
export class VithoriaTasksServiceService {
  list = ['Tomar medicação'];
  constructor() {}

  getList() {
    return this.list;
  }
  deleteItem(i: number) {
    this.list.splice(i, 1);
  }
  createItem(task: string) {
    this.list.push(task);
  }
}

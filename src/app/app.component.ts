import { Component } from '@angular/core';
import {ListModel} from '@app/shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'To-Do List';

  // List
  public listlabel = '';
  public lists: ListModel[] = [];

  // Item
  public itemContent = '';

  /**
   * Add a list
   */
  public addList() {
    if (this.listlabel) {
      this.lists.push({
        label: this.listlabel,
        items: []
      });
    }
    this.listlabel = '';
  }

  /**
   * Add item to a list
   * @param list List of items
   */
  public addItem(list: ListModel) {
    if (this.itemContent) {
      list.items.push({
        content: this.itemContent
      });
    }
    this.itemContent = '';
  }
}

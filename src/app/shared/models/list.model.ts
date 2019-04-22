import {ItemModel} from '@app/shared/models/item.model';

export interface ListModel {
  label: string;
  items: ItemModel[];
}

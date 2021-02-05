import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() saveShopingListItem = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  onItemSave(name, amount): void {
    this.saveShopingListItem.emit(new Ingredient(name.value, amount.value));
  }

}

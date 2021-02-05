import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  @Input() activeTab: string;
  @Output() tabSelected = new EventEmitter<string>();

  onClickRecipes(): void {
    this.activeTab = 'recipes';
    this.tabSelected.emit(this.activeTab);
  }

  onClickShopingList(): void {
    this.activeTab = 'shopingList';
    this.tabSelected.emit(this.activeTab);
  }
}

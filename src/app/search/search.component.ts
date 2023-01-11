import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  public enteredSearchValue:string='';

  @Output()
  public searchText:EventEmitter<string>=new EventEmitter<string>();

  onSearchTextEntered(){
    this.searchText.emit(this.enteredSearchValue);
  }

}

import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-my-listing-item',
  templateUrl: './my-listing-item.component.html',
  styleUrls: ['./my-listing-item.component.css']
})
export class MyListingItemComponent implements OnInit {
  @Input() listing;
  @Output() onDeleteClicked = new EventEmitter<string>();
  @Output() onEditClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}

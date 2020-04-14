import { Component, OnInit, Input } from '@angular/core';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-item',
  templateUrl: './listing-item.component.html',
  styleUrls: ['./listing-item.component.css']
})
export class ListingItemComponent implements OnInit {
  @Input() listing: Listing;

  constructor() { }

  ngOnInit(): void {
  }
}

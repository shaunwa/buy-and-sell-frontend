import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service';
import { Listing } from '../types';

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor(private listingService: ListingService) { }

  ngOnInit(): void {
    this.listingService.getListings()
      .subscribe(listings => this.listings = listings);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListingService } from '../listing.service';
import { Listing } from '../types';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.component.html',
  styleUrls: ['./my-listings.component.css']
})
export class MyListingsComponent implements OnInit {
  listings: Listing[] = [];

  constructor(
    private listingService: ListingService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.listingService.getListingsForUser('99999') // hard-coding this for now
      .subscribe(listings => this.listings = listings);
  }

  onEditListing(id: string) {
    this.router.navigateByUrl(`/edit-listing/${id}`);
  }

  onCreateListing() {
    this.router.navigateByUrl('/new-listing');
  }

  onDeleteListing(id: string) {
    this.listingService.deleteListing(id)
      .subscribe(() => this.listings =
        this.listings.filter(listing => listing.id !== id));
  }
}

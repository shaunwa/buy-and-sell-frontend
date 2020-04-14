import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ListingService } from '../listing.service';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent implements OnInit {
  isLoading: boolean = true;
  listing: Listing;

  constructor(
    private listingService: ListingService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listingService.getListing(id)
      .subscribe(results => {
        this.listing = results[0];
        this.isLoading = false;
      });
  }

  goBack(): void {
    this.location.back();
  }

  goToContactPage(): void {
    this.router.navigateByUrl(`/contact/${this.listing.id}`);
  }
}

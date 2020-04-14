import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.css']
})
export class NewListingPageComponent implements OnInit {
  name = '';
  description = '';
  price = '';

  constructor(
    private listingService: ListingService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.listingService.createListing({
        name: this.name,
        description: this.description,
        price: this.price,
    })
      .subscribe(() => {
        this.router.navigateByUrl('/my-listings');
      });
  }
}

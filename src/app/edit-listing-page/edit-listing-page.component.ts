import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit {
  isLoading = true;
  name = '';
  description = '';
  price = '';

  constructor(
    private listingService: ListingService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listingService.getListing(id)
      .subscribe(results => {
        this.isLoading = false;
        this.name = results[0].name;
        this.description = results[0].description;
        this.price = String(results[0].price);
      });
  }

  onSubmit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listingService.updateListing(id, {
      name: this.name,
      description: this.description,
      price: this.price,
    }).subscribe(() => this.router.navigateByUrl('/my-listings'));
  }
}

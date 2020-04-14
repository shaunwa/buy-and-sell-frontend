import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { ListingItemComponent } from './listing-item/listing-item.component';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { MyListingsComponent } from './my-listings/my-listings.component';
import { ListingFormComponent } from './listing-form/listing-form.component';
import { MyListingItemComponent } from './my-listing-item/my-listing-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingsPageComponent,
    ListingItemComponent,
    ListingDetailPageComponent,
    WelcomePageComponent,
    ContactPageComponent,
    NewListingPageComponent,
    EditListingPageComponent,
    MyListingsComponent,
    ListingFormComponent,
    MyListingItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

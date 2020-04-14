import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listing } from './types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  private listingsUrl = '/api/listings';
  private individualListingUrl = (id: string) => `/api/listings/${id}`;
  private userListingsUrl = (userId: string) => `/api/users/${userId}/listings`;
  constructor(
    private http: HttpClient,
  ) { }

  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>(this.listingsUrl);
  }

  getListing(id: string): Observable<Listing> {
    return this.http.get<Listing>(this.individualListingUrl(id));
  }

  getListingsForUser(userId: string): Observable<Listing[]> {
    return this.http.get<Listing[]>(this.userListingsUrl(userId));
  }

  createListing(listingData): Observable<Listing> {
    return this.http.post<Listing>(
      this.listingsUrl,
      { newListing: listingData },
      httpOptions,
    );
  }

  updateListing(id, listingData): Observable<Listing> {
    return this.http.post<Listing>(
      this.individualListingUrl(id),
      { changes: listingData },
      httpOptions,
    );
  }

  deleteListing(id): Observable<any> {
    return this.http.delete(this.individualListingUrl(id));
  }
}

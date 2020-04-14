import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListingItemComponent } from './my-listing-item.component';

describe('MyListingItemComponent', () => {
  let component: MyListingItemComponent;
  let fixture: ComponentFixture<MyListingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyListingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

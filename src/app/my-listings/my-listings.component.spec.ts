import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListingsComponent } from './my-listings.component';

describe('MyListingsComponent', () => {
  let component: MyListingsComponent;
  let fixture: ComponentFixture<MyListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

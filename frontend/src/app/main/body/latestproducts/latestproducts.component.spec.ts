import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestproductsComponent } from './latestproducts.component';

describe('LatestproductsComponent', () => {
  let component: LatestproductsComponent;
  let fixture: ComponentFixture<LatestproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

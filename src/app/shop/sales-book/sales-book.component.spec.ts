import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesBookComponent } from './sales-book.component';

describe('SalesBookComponent', () => {
  let component: SalesBookComponent;
  let fixture: ComponentFixture<SalesBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensProductsComponent } from './mens-products.component';

describe('MensProductsComponent', () => {
  let component: MensProductsComponent;
  let fixture: ComponentFixture<MensProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

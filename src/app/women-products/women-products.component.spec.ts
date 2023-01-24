import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterPipe } from '../pipes/filter.pipe';

import { WomenProductsComponent } from './women-products.component';

describe('WomenProductsComponent', () => {
  let component: WomenProductsComponent;
  let fixture: ComponentFixture<WomenProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenProductsComponent,FilterPipe ],providers:[HttpClient,HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

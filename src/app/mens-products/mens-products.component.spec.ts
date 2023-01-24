import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterPipe } from '../pipes/filter.pipe';
import { MensProductsComponent } from './mens-products.component';

describe('MensProductsComponent', () => {
  let component: MensProductsComponent;
  let fixture: ComponentFixture<MensProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensProductsComponent,FilterPipe ],providers:[HttpClient,HttpHandler]
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

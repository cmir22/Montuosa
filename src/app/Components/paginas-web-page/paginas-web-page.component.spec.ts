import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginasWebPageComponent } from './paginas-web-page.component';

describe('PaginasWebPageComponent', () => {
  let component: PaginasWebPageComponent;
  let fixture: ComponentFixture<PaginasWebPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginasWebPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginasWebPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

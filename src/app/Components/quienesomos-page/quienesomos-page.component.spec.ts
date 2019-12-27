import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienesomosPageComponent } from './quienesomos-page.component';

describe('QuienesomosPageComponent', () => {
  let component: QuienesomosPageComponent;
  let fixture: ComponentFixture<QuienesomosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuienesomosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuienesomosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

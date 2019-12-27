import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatumarcaPageComponent } from './creatumarca-page.component';

describe('CreatumarcaPageComponent', () => {
  let component: CreatumarcaPageComponent;
  let fixture: ComponentFixture<CreatumarcaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatumarcaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatumarcaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

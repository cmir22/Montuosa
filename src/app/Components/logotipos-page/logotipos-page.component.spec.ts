import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogotiposPageComponent } from './logotipos-page.component';

describe('LogotiposPageComponent', () => {
  let component: LogotiposPageComponent;
  let fixture: ComponentFixture<LogotiposPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogotiposPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogotiposPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

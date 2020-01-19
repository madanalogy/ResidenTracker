import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentSearchComponent } from './resident-search.component';

describe('ResidentSearchComponent', () => {
  let component: ResidentSearchComponent;
  let fixture: ComponentFixture<ResidentSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RidersPageComponent } from './riders-page.component';

describe('RidersPageComponent', () => {
  let component: RidersPageComponent;
  let fixture: ComponentFixture<RidersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RidersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RidersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

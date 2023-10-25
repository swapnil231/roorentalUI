import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomerentUIComponent } from './homerent-ui.component';

describe('HomerentUIComponent', () => {
  let component: HomerentUIComponent;
  let fixture: ComponentFixture<HomerentUIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomerentUIComponent]
    });
    fixture = TestBed.createComponent(HomerentUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterHomeComponent } from './router-home.component';

describe('RouterHomeComponent', () => {
  let component: RouterHomeComponent;
  let fixture: ComponentFixture<RouterHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouterHomeComponent]
    });
    fixture = TestBed.createComponent(RouterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

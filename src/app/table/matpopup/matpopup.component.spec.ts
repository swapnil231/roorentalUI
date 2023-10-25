import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatpopupComponent } from './matpopup.component';

describe('MatpopupComponent', () => {
  let component: MatpopupComponent;
  let fixture: ComponentFixture<MatpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatpopupComponent]
    });
    fixture = TestBed.createComponent(MatpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

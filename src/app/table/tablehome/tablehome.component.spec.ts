import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablehomeComponent } from './tablehome.component';

describe('TablehomeComponent', () => {
  let component: TablehomeComponent;
  let fixture: ComponentFixture<TablehomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablehomeComponent]
    });
    fixture = TestBed.createComponent(TablehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

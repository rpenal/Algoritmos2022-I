import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadSelectionComponent } from './bread-selection.component';

describe('BreadSelectionComponent', () => {
  let component: BreadSelectionComponent;
  let fixture: ComponentFixture<BreadSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeatSelectionComponent } from './meat-selection.component';

describe('MeatSelectionComponent', () => {
  let component: MeatSelectionComponent;
  let fixture: ComponentFixture<MeatSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeatSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeatSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

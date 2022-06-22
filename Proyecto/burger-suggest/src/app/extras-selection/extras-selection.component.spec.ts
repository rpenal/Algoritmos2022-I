import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrasSelectionComponent } from './extras-selection.component';

describe('ExtrasSelectionComponent', () => {
  let component: ExtrasSelectionComponent;
  let fixture: ComponentFixture<ExtrasSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtrasSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtrasSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

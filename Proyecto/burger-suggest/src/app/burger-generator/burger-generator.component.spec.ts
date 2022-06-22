import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerGeneratorComponent } from './burger-generator.component';

describe('BurgerGeneratorComponent', () => {
  let component: BurgerGeneratorComponent;
  let fixture: ComponentFixture<BurgerGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgerGeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

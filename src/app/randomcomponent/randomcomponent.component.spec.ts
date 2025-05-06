import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomcomponentComponent } from './randomcomponent.component';

describe('RandomcomponentComponent', () => {
  let component: RandomcomponentComponent;
  let fixture: ComponentFixture<RandomcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

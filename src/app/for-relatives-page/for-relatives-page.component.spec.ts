import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForRelativesPageComponent } from './for-relatives-page.component';

describe('ForRelativesPageComponent', () => {
  let component: ForRelativesPageComponent;
  let fixture: ComponentFixture<ForRelativesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForRelativesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForRelativesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

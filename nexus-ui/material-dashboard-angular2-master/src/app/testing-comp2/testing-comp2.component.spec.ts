import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingComp2Component } from './testing-comp2.component';

describe('TestingComp2Component', () => {
  let component: TestingComp2Component;
  let fixture: ComponentFixture<TestingComp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingComp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

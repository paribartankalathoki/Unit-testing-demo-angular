import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureComponent } from './feature.component';

describe('FeatureComponent', () => {
  let component: FeatureComponent;
  let fixture: ComponentFixture<FeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // write your testing method and logic here

  it(`should have title 'This is the feature component.'`,async(() => {
    fixture = TestBed.createComponent(FeatureComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.componentTitle).toEqual('This is the feature component.');
  }));
});

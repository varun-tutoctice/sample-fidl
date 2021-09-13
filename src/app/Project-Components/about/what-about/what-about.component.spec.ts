import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatAboutComponent } from './what-about.component';

describe('WhatAboutComponent', () => {
  let component: WhatAboutComponent;
  let fixture: ComponentFixture<WhatAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

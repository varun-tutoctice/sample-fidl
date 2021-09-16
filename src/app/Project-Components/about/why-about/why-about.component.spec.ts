import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyAboutComponent } from './why-about.component';

describe('WhyAboutComponent', () => {
  let component: WhyAboutComponent;
  let fixture: ComponentFixture<WhyAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

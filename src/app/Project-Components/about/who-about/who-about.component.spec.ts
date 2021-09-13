import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoAboutComponent } from './who-about.component';

describe('WhoAboutComponent', () => {
  let component: WhoAboutComponent;
  let fixture: ComponentFixture<WhoAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

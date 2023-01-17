import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalisviewComponent } from './detalisview.component';

describe('DetalisviewComponent', () => {
  let component: DetalisviewComponent;
  let fixture: ComponentFixture<DetalisviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalisviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalisviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

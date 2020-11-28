import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PazeComponent } from './paze.component';

describe('PazeComponent', () => {
  let component: PazeComponent;
  let fixture: ComponentFixture<PazeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PazeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PazeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

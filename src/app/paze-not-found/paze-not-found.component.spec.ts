import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PazeNotFoundComponent } from './paze-not-found.component';

describe('PazeNotFoundComponent', () => {
  let component: PazeNotFoundComponent;
  let fixture: ComponentFixture<PazeNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PazeNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PazeNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

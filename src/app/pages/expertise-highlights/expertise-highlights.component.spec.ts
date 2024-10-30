import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertiseHighlightsComponent } from './expertise-highlights.component';

describe('ExpertiseHighlightsComponent', () => {
  let component: ExpertiseHighlightsComponent;
  let fixture: ComponentFixture<ExpertiseHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpertiseHighlightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpertiseHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

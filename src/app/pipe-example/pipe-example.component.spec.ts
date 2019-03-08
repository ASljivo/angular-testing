import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeExampleComponent } from './pipe-example.component';
import { StrengthPipe } from './strength.pipe';

describe('PipeExampleComponent', () => {
  let component: PipeExampleComponent;
  let fixture: ComponentFixture<PipeExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PipeExampleComponent, StrengthPipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

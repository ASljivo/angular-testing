import { HoverFocusDirective } from './hover-focus.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DirectiveExampleComponent } from './directive-example.component';

describe('Directive: HoverFocus', () => {
  let component: DirectiveExampleComponent;
  let fixture: ComponentFixture<DirectiveExampleComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveExampleComponent, HoverFocusDirective]
    });
    fixture = TestBed.createComponent(DirectiveExampleComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
  });

  it('should create an instance', () => {
    const directive = new HoverFocusDirective();
    expect(directive).toBeTruthy();
  });

  it('hovering over input', () => {
    inputEl.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('blue');

    inputEl.triggerEventHandler('mouseout', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit');
  });
});

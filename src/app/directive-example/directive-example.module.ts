import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveExampleComponent } from './directive-example.component';
import { HoverFocusDirective } from './hover-focus.directive';
import { DirectiveExampleRoutingModule } from './directive-example-routing.module';

@NgModule({
  declarations: [DirectiveExampleComponent, HoverFocusDirective],
  imports: [CommonModule, DirectiveExampleRoutingModule]
})
export class DirectiveExampleModule {}

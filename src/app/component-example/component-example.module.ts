import { ComponentExampleRoutingModule } from './component-example.-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentExampleComponent } from './component-example.component';

@NgModule({
  declarations: [ComponentExampleComponent],
  imports: [CommonModule, ComponentExampleRoutingModule]
})
export class ComponentExampleModule {}

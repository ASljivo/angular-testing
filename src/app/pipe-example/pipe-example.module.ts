import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeExampleComponent } from './pipe-example.component';
import { StrengthPipe } from './strength.pipe';
import { PipeExampleRoutingModule } from './pipe-example.-routing.module';

@NgModule({
  declarations: [PipeExampleComponent, StrengthPipe],
  imports: [
    CommonModule,
    PipeExampleRoutingModule
  ]
})
export class PipeExampleModule { }

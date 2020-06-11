import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PullpostService } from './pullpost/pullpost.service';

/*                                                                *
 *                       Core Modules                             *
 * Core modules are any functionality that must be loaded ONCE.   *
 * This mostly consists of background services that are always    *
 * running or one-time modules like the header.                   *
 */

@NgModule({
  declarations: [
    PullpostService
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PullpostService
  ]
})
export class CoreModule { }

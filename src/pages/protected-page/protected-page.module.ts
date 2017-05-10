import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProtectedPage } from './protected-page';
import {TokenService} from '../../providers/token-service';

@NgModule({
  declarations: [
    ProtectedPage,
  ],
  imports: [
    IonicPageModule.forChild(ProtectedPage),
  ],
  exports: [
    ProtectedPage
  ],
  providers: [
    TokenService
  ]
})
export class ProtectedPageModule {}

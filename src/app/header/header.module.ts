import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import {MatMenuModule, MatButtonModule, MatCardModule, MatListModule, MatIconModule} from '@angular/material';
import { MenuOneComponent } from './menu-one/menu-one.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { MenuTwoComponent } from './menu-two/menu-two.component';
import { MenuThreeComponent } from './menu-three/menu-three.component';


@NgModule({
  declarations: [NavigationComponent, MenuOneComponent, MenuTwoComponent, MenuThreeComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    OverlayModule,
    MatListModule,
    MatIconModule
  ],
  entryComponents: [MenuOneComponent, MenuTwoComponent, MenuThreeComponent],
  exports: [
    NavigationComponent,
  ]
})
export class HeaderModule { }

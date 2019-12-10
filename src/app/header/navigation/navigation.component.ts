import { Component, OnInit, Renderer2, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { OverlayRef, CdkOverlayOrigin, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { MenuOneComponent } from '../menu-one/menu-one.component';
import { MenuTwoComponent } from '../menu-two/menu-two.component';
import { MenuThreeComponent } from '../menu-three/menu-three.component';
import { fromEvent, of } from 'rxjs';
import { mergeMap, delay, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  // modulesList: Array<any>;
  // enteredButton = false;
  // isMatMenuOpen = false;
  // isMatMenu2Open = false;
  // prevButtonTrigger;

  overlayRef: OverlayRef;
  // @ViewChild(CdkOverlayOrigin, { static: false }) overlayOrigin: CdkOverlayOrigin;
  @ViewChildren(CdkOverlayOrigin) overlayOrigin: QueryList<CdkOverlayOrigin>;

  constructor(public overlay: Overlay) {
    // this.modulesList = ModulesList;
  }

  showControls(comp: number) {
    setTimeout(() => {
      let component = null;

      switch (comp) {
        case 1:
          component = MenuOneComponent;
          break;
        case 2:
          component = MenuTwoComponent;
          break;
        case 3:
          component = MenuThreeComponent;
          break;
      }

      if (this.overlayRef) {
        this.overlayRef.dispose();

      }

      // console.log(this.overlayOrigin.elementRef.nativeElement);
      const strategy = this.overlay.position().flexibleConnectedTo(
        this.overlayOrigin.find((item, index) => index + 1 === comp).elementRef.nativeElement
      ).withPositions([{
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top'
      }]).withPush(false);

      const config = new OverlayConfig({
        positionStrategy: strategy,
        backdropClass: 'container',
        hasBackdrop: true,
      });
      this.overlayRef = this.overlay.create(config);

      this.overlayRef.attach(
        new ComponentPortal(component)
      );
      this.overlayRef.backdropClick().subscribe(
        () => {
          this.overlayRef.dispose();
        }
      );
    });
  }

  hideControls() {
    setTimeout(() => {
      this.overlayRef.dispose();
    }, 1000);
  }

  ngOnInit() {
  }

}

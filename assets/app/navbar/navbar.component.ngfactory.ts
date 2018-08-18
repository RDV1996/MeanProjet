/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './navbar.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/router';
import * as i3 from '@angular/common';
import * as i4 from './navbar.component';
import * as i5 from '../service/auth.service';
import * as i6 from '../service/pagina.service';
const styles_NavbarComponent:any[] = [i0.styles];
export const RenderType_NavbarComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_NavbarComponent,data:{}});
function View_NavbarComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),6,'li',[['class',
      'nav-item']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n                    '])),(_l()(),i1.ɵeld(2,
          0,(null as any),(null as any),3,'a',[['class','nav-link']],[[1,'target',
              0],[8,'href',4]],[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,3).onClick($event.button,$event.ctrlKey,
                  $event.metaKey,$event.shiftKey)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(3,671744,(null as any),0,i2.RouterLinkWithHref,
          [i2.Router,i2.ActivatedRoute,i3.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),i1.ɵpad(4,1),(_l()(),i1.ɵted(-1,(null as any),['Login'])),
      (_l()(),i1.ɵted(-1,(null as any),['\n                ']))],(_ck,_v) => {
    const currVal_2:any = _ck(_v,4,0,'/signin');
    _ck(_v,3,0,currVal_2);
  },(_ck,_v) => {
    const currVal_0:any = i1.ɵnov(_v,3).target;
    const currVal_1:any = i1.ɵnov(_v,3).href;
    _ck(_v,2,0,currVal_0,currVal_1);
  });
}
function View_NavbarComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),4,'li',[['class',
      'nav-item']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n                    '])),(_l()(),i1.ɵeld(2,
          0,(null as any),(null as any),1,'a',[['class','nav-link']],(null as any),
          [[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.onLogout()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['Logout'])),
      (_l()(),i1.ɵted(-1,(null as any),['\n                ']))],(null as any),(null as any));
}
function View_NavbarComponent_3(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),3,'a',[['class',
      'nav-link']],[[1,'target',0],[8,'href',4]],[[(null as any),'click']],(_v,en,
      $event) => {
    var ad:boolean = true;
    if (('click' === en)) {
      const pd_0:any = ((<any>i1.ɵnov(_v,1).onClick($event.button,$event.ctrlKey,$event.metaKey,
          $event.shiftKey)) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),i1.ɵdid(1,671744,(null as any),0,i2.RouterLinkWithHref,
      [i2.Router,i2.ActivatedRoute,i3.LocationStrategy],{routerLink:[0,'routerLink']},
      (null as any)),i1.ɵpad(2,1),(_l()(),i1.ɵted(-1,(null as any),['Make Page']))],
      (_ck,_v) => {
        const currVal_2:any = _ck(_v,2,0,'/makepage');
        _ck(_v,1,0,currVal_2);
      },(_ck,_v) => {
        const currVal_0:any = i1.ɵnov(_v,1).target;
        const currVal_1:any = i1.ɵnov(_v,1).href;
        _ck(_v,0,0,currVal_0,currVal_1);
      });
}
function View_NavbarComponent_4(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),4,'div',[['class',
      'row']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n                        '])),(_l()(),i1.ɵeld(2,
          0,(null as any),(null as any),1,'label',[['class','col-xs-12']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['You don\'t have any subscriptions yet!'])),(_l()(),i1.ɵted(-1,
          (null as any),['\n                    ']))],(null as any),(null as any));
}
function View_NavbarComponent_6(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'button',[['class',
      'col-xs-6']],(null as any),[[(null as any),'click']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>_co.unsubscribe()) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['Unsubscribe']))],
      (null as any),(null as any));
}
function View_NavbarComponent_5(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),9,'div',[['class',
      'row']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n                        '])),(_l()(),i1.ɵeld(2,
          0,(null as any),(null as any),3,'a',[['class','col-cs-12']],[[1,'target',
              0],[8,'href',4]],[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,3).onClick($event.button,$event.ctrlKey,
                  $event.metaKey,$event.shiftKey)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(3,671744,(null as any),0,i2.RouterLinkWithHref,
          [i2.Router,i2.ActivatedRoute,i3.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),i1.ɵpad(4,2),(_l()(),i1.ɵted(5,(null as any),['',''])),(_l()(),
          i1.ɵted(-1,(null as any),['\n                        '])),(_l()(),i1.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_NavbarComponent_6)),i1.ɵdid(8,
          16384,(null as any),0,i3.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,
              'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n                    ']))],
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_2:any = _ck(_v,4,0,'/p',_v.context.$implicit.id);
        _ck(_v,3,0,currVal_2);
        const currVal_4:any = _co.isOwner(_v.context.$implicit.id);
        _ck(_v,8,0,currVal_4);
      },(_ck,_v) => {
        const currVal_0:any = i1.ɵnov(_v,3).target;
        const currVal_1:any = i1.ɵnov(_v,3).href;
        _ck(_v,2,0,currVal_0,currVal_1);
        const currVal_3:any = _v.context.$implicit.naam;
        _ck(_v,5,0,currVal_3);
      });
}
export function View_NavbarComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),49,'nav',[['class',
      'navbar navbar-expand-lg navbar-dark bg-dark']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
      ['\n        '])),(_l()(),i1.ɵeld(2,0,(null as any),(null as any),1,'a',[['class',
      'navbar-brand'],['href','#']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted(-1,(null as any),['PostSite'])),(_l()(),i1.ɵted(-1,
      (null as any),['\n        '])),(_l()(),i1.ɵeld(5,0,(null as any),(null as any),
      3,'button',[['aria-controls','navbarResponsive'],['aria-expanded','false'],['aria-label',
          'Toggle navigation'],['class','navbar-toggler'],['data-target','#navbarResponsive'],
          ['data-toggle','collapse'],['type','button']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
      ['\n            '])),(_l()(),i1.ɵeld(7,0,(null as any),(null as any),0,'span',
      [['class','navbar-toggler-icon']],(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n        '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n        '])),(_l()(),i1.ɵeld(10,0,(null as any),
          (null as any),38,'div',[['class','collapse navbar-collapse'],['id','navbarResponsive']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n            '])),(_l()(),i1.ɵeld(12,0,(null as any),
          (null as any),35,'ul',[['class','navbar-nav ml-auto']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
          ['\n                '])),(_l()(),i1.ɵeld(14,0,(null as any),(null as any),
          6,'li',[['class','nav-item']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n                    '])),
      (_l()(),i1.ɵeld(16,0,(null as any),(null as any),3,'a',[['class','nav-link']],
          [[1,'target',0],[8,'href',4]],[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,17).onClick($event.button,$event.ctrlKey,
                  $event.metaKey,$event.shiftKey)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(17,671744,(null as any),0,i2.RouterLinkWithHref,
          [i2.Router,i2.ActivatedRoute,i3.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),i1.ɵpad(18,1),(_l()(),i1.ɵted(-1,(null as any),['Home'])),
      (_l()(),i1.ɵted(-1,(null as any),['\n                '])),(_l()(),i1.ɵted(-1,
          (null as any),['\n                '])),(_l()(),i1.ɵeld(22,0,(null as any),
          (null as any),5,'li',[['class','nav-item']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
          ['\n                    '])),(_l()(),i1.ɵeld(24,0,(null as any),(null as any),
          2,'a',[['class','nav-link'],['data-target','#popup'],['data-toggle','modal']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['Subscriptions'])),(_l()(),i1.ɵeld(26,0,(null as any),
          (null as any),0,'span',[['class','caret']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n                '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_NavbarComponent_1)),
      i1.ɵdid(29,16384,(null as any),0,i3.NgIf,[i1.ViewContainerRef,i1.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n                '])),
      (_l()(),i1.ɵeld(31,0,(null as any),(null as any),6,'li',[['class','nav-item']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n                    '])),(_l()(),i1.ɵeld(33,
          0,(null as any),(null as any),3,'a',[['class','nav-link']],[[1,'target',
              0],[8,'href',4]],[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,34).onClick($event.button,$event.ctrlKey,
                  $event.metaKey,$event.shiftKey)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(34,671744,(null as any),0,i2.RouterLinkWithHref,
          [i2.Router,i2.ActivatedRoute,i3.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),i1.ɵpad(35,2),(_l()(),i1.ɵted(36,(null as any),['',''])),
      (_l()(),i1.ɵted(-1,(null as any),['\n                '])),(_l()(),i1.ɵted(-1,
          (null as any),['\n                '])),(_l()(),i1.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_NavbarComponent_2)),i1.ɵdid(40,16384,
          (null as any),0,i3.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},
          (null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n                '])),
      (_l()(),i1.ɵeld(42,0,(null as any),(null as any),4,'li',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['\n                    '])),(_l()(),i1.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_NavbarComponent_3)),i1.ɵdid(45,16384,
          (null as any),0,i3.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},
          (null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n                '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n            '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n        '])),(_l()(),i1.ɵted(-1,(null as any),['\n'])),(_l()(),i1.ɵted(-1,
          (null as any),['\n\n'])),(_l()(),i1.ɵeld(51,0,(null as any),(null as any),
          29,'div',[['class','modal fade'],['id','popup'],['role','dialog']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['\n    '])),(_l()(),i1.ɵeld(53,0,(null as any),(null as any),
          26,'div',[['class','modal-dialog']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n        '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n        '])),(_l()(),i1.ɵeld(56,0,(null as any),
          (null as any),22,'div',[['class','modal-content']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
          ['\n            '])),(_l()(),i1.ɵeld(58,0,(null as any),(null as any),7,
          'div',[['class','modal-header']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n                '])),
      (_l()(),i1.ɵeld(60,0,(null as any),(null as any),1,'h4',[['class','modal-title']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['Your Subscriptions:'])),(_l()(),i1.ɵted(-1,
          (null as any),['\n                '])),(_l()(),i1.ɵeld(63,0,(null as any),
          (null as any),1,'button',[['class','close'],['data-dismiss','modal']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['×'])),(_l()(),i1.ɵted(-1,(null as any),['\n            '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n            '])),(_l()(),i1.ɵeld(67,0,(null as any),
          (null as any),10,'div',[['class','modal-body']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
          ['\n                '])),(_l()(),i1.ɵeld(69,0,(null as any),(null as any),
          7,'div',[['class','container']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n                    '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_NavbarComponent_4)),
      i1.ɵdid(72,16384,(null as any),0,i3.NgIf,[i1.ViewContainerRef,i1.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n                    '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_NavbarComponent_5)),
      i1.ɵdid(75,802816,(null as any),0,i3.NgForOf,[i1.ViewContainerRef,i1.TemplateRef,
          i1.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i1.ɵted(-1,
          (null as any),['\n                '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n            '])),(_l()(),i1.ɵted(-1,(null as any),['\n        '])),(_l()(),
          i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵted(-1,(null as any),['\n'])),
      (_l()(),i1.ɵted(-1,(null as any),['\n']))],(_ck,_v) => {
    var _co:i4.NavbarComponent = _v.component;
    const currVal_2:any = _ck(_v,18,0,'/');
    _ck(_v,17,0,currVal_2);
    const currVal_3:boolean = !_co.isLoggedin;
    _ck(_v,29,0,currVal_3);
    const currVal_6:any = _ck(_v,35,0,'/profile',_co.user.id);
    _ck(_v,34,0,currVal_6);
    const currVal_8:any = _co.isLoggedin;
    _ck(_v,40,0,currVal_8);
    const currVal_9:any = _co.isLoggedin;
    _ck(_v,45,0,currVal_9);
    const currVal_10:any = (_co.subscribed.length == 0);
    _ck(_v,72,0,currVal_10);
    const currVal_11:any = _co.subscribed;
    _ck(_v,75,0,currVal_11);
  },(_ck,_v) => {
    var _co:i4.NavbarComponent = _v.component;
    const currVal_0:any = i1.ɵnov(_v,17).target;
    const currVal_1:any = i1.ɵnov(_v,17).href;
    _ck(_v,16,0,currVal_0,currVal_1);
    const currVal_4:any = i1.ɵnov(_v,34).target;
    const currVal_5:any = i1.ɵnov(_v,34).href;
    _ck(_v,33,0,currVal_4,currVal_5);
    const currVal_7:any = _co.naam;
    _ck(_v,36,0,currVal_7);
  });
}
export function View_NavbarComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'app-navbar',
      ([] as any[]),(null as any),(null as any),(null as any),View_NavbarComponent_0,
      RenderType_NavbarComponent)),i1.ɵdid(1,49152,(null as any),0,i4.NavbarComponent,
      [i5.AuthService,i2.Router,i6.PaginaService],(null as any),(null as any))],(null as any),
      (null as any));
}
export const NavbarComponentNgFactory:i1.ComponentFactory<i4.NavbarComponent> = i1.ɵccf('app-navbar',
    i4.NavbarComponent,View_NavbarComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvcm9ieWQvRG9jdW1lbnRzL1NjaG9vbC9EaXRKYWFyL01FQU4vUFJPSkVDVC9hc3NldHMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzL3JvYnlkL0RvY3VtZW50cy9TY2hvb2wvRGl0SmFhci9NRUFOL1BST0pFQ1QvYXNzZXRzL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cyIsIm5nOi8vL0M6L1VzZXJzL3JvYnlkL0RvY3VtZW50cy9TY2hvb2wvRGl0SmFhci9NRUFOL1BST0pFQ1QvYXNzZXRzL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvcm9ieWQvRG9jdW1lbnRzL1NjaG9vbC9EaXRKYWFyL01FQU4vUFJPSkVDVC9hc3NldHMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnRzLk5hdmJhckNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZGFyayBiZy1kYXJrXCI+XHJcbiAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPlBvc3RTaXRlPC9hPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJuYXZiYXItdG9nZ2xlclwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyUmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibmF2YmFyUmVzcG9uc2l2ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyUmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2IG1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIFtyb3V0ZXJMaW5rXT1cIlsnLyddXCI+SG9tZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjcG9wdXBcIj5TdWJzY3JpcHRpb25zPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZXRcIj48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIiAqbmdJZj1cIiFpc0xvZ2dlZGluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIFtyb3V0ZXJMaW5rXT1cIlsnL3NpZ25pbiddXCI+TG9naW48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgW3JvdXRlckxpbmtdPVwiWycvcHJvZmlsZScsIHVzZXIuaWRdXCI+e3tuYWFtfX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIiAqbmdJZj1cImlzTG9nZ2VkaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgKGNsaWNrKT1cIm9uTG9nb3V0KClcIj5Mb2dvdXQ8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiAqbmdJZj1cImlzTG9nZ2VkaW5cIiBbcm91dGVyTGlua109XCJbJy9tYWtlcGFnZSddXCI+TWFrZSBQYWdlPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuPC9uYXY+XHJcblxyXG48ZGl2IGlkPVwicG9wdXBcIiBjbGFzcz1cIm1vZGFsIGZhZGVcIiByb2xlPVwiZGlhbG9nXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCI+XHJcbiAgICAgICAgPCEtLSBNb2RhbCBjb250ZW50LS0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5Zb3VyIFN1YnNjcmlwdGlvbnM6PC9oND5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+JnRpbWVzOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwic3Vic2NyaWJlZC5sZW5ndGggPT0gMFwiIGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC14cy0xMlwiPllvdSBkb24ndCBoYXZlIGFueSBzdWJzY3JpcHRpb25zIHlldCE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHN1YiBvZiBzdWJzY3JpYmVkXCIgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJjb2wtY3MtMTJcIiBbcm91dGVyTGlua109XCJbJy9wJywgc3ViLmlkXVwiPnt7c3ViLm5hYW19fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNvbC14cy02XCIgKm5nSWY9XCJpc093bmVyKHN1Yi5pZClcIiAoY2xpY2spPVwidW5zdWJzY3JpYmUoKVwiPlVuc3Vic2NyaWJlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiIsIjxhcHAtbmF2YmFyPjwvYXBwLW5hdmJhcj4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ2NnQjtNQUFBO01BQXlDLDhEQUNyQztVQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7a0JBQUE7Y0FBQTtZQUFBO1lBQUE7VUFBQSx1Q0FBQTtVQUFBO1VBQUEsc0JBQW9CLE1BQTJCO01BQVM7SUFBcEM7SUFBcEIsV0FBb0IsU0FBcEI7O0lBQUE7SUFBQTtJQUFBLFdBQUEsbUJBQUE7Ozs7b0JBS0o7TUFBQTtNQUF3Qyw4REFDcEM7VUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFvQjtjQUFBO2NBQUE7WUFBQTtZQUFwQjtVQUFBLGdDQUF5QztNQUFVOzs7b0JBR25EO01BQUE7WUFBQTtJQUFBO0lBQUE7TUFBQTtVQUFBO01BQUE7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

/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './pagina.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/router';
import * as i3 from '@angular/common';
import * as i4 from '../post/postList.component.ngfactory';
import * as i5 from '../post/postList.component';
import * as i6 from '@angular/platform-browser';
import * as i7 from '../service/post.service';
import * as i8 from '@angular/forms';
import * as i9 from './pagina.component';
import * as i10 from '../service/auth.service';
import * as i11 from '../service/pagina.service';
const styles_PaginaComponent:any[] = [i0.styles];
export const RenderType_PaginaComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_PaginaComponent,data:{}});
function View_PaginaComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),3,'li',([] as any[]),
      (null as any),[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.SetSubscribe()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i1.ɵeld(1,0,(null as any),(null as any),
      1,'a',([] as any[]),(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted(-1,(null as any),['Subscribe'])),(_l()(),i1.ɵted(-1,
      (null as any),['\n                ']))],(null as any),(null as any));
}
function View_PaginaComponent_3(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),3,'li',([] as any[]),
      (null as any),[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.unsubscribe()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i1.ɵeld(1,0,(null as any),(null as any),
      1,'a',([] as any[]),(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted(-1,(null as any),['unubscribe'])),(_l()(),i1.ɵted(-1,
      (null as any),['\n                ']))],(null as any),(null as any));
}
function View_PaginaComponent_4(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),4,'li',([] as any[]),
      (null as any),[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,1).onClick()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i1.ɵdid(1,16384,(null as any),0,i2.RouterLink,
      [i2.Router,i2.ActivatedRoute,[8,(null as any)],i1.Renderer2,i1.ElementRef],{routerLink:[0,
          'routerLink']},(null as any)),i1.ɵpad(2,2),(_l()(),i1.ɵeld(3,0,(null as any),
      (null as any),1,'a',([] as any[]),(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['Make Post']))],
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _ck(_v,2,0,'/p/makepost',_co.thsiID);
        _ck(_v,1,0,currVal_0);
      },(null as any));
}
function View_PaginaComponent_5(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),3,'a',([] as any[]),
      [[1,'target',0],[8,'href',4]],[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,1).onClick($event.button,$event.ctrlKey,
              $event.metaKey,$event.shiftKey)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i1.ɵdid(1,671744,(null as any),0,i2.RouterLinkWithHref,
      [i2.Router,i2.ActivatedRoute,i3.LocationStrategy],{routerLink:[0,'routerLink']},
      (null as any)),i1.ɵpad(2,2),(_l()(),i1.ɵted(-1,(null as any),['(edit mods)']))],
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_2:any = _ck(_v,2,0,'/p/mods/',_co.thispage.id);
        _ck(_v,1,0,currVal_2);
      },(_ck,_v) => {
        const currVal_0:any = i1.ɵnov(_v,1).target;
        const currVal_1:any = i1.ɵnov(_v,1).href;
        _ck(_v,0,0,currVal_0,currVal_1);
      });
}
function View_PaginaComponent_6(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),6,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted(-1,(null as any),['\n            '])),(_l()(),i1.ɵeld(2,0,(null as any),
      (null as any),3,'a',([] as any[]),[[1,'target',0],[8,'href',4]],[[(null as any),
          'click']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,3).onClick($event.button,$event.ctrlKey,
              $event.metaKey,$event.shiftKey)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i1.ɵdid(3,671744,(null as any),0,i2.RouterLinkWithHref,
      [i2.Router,i2.ActivatedRoute,i3.LocationStrategy],{routerLink:[0,'routerLink']},
      (null as any)),i1.ɵpad(4,2),(_l()(),i1.ɵted(5,(null as any),['\n                ',
      '\n            '])),(_l()(),i1.ɵted(-1,(null as any),['\n        ']))],(_ck,
      _v) => {
    const currVal_2:any = _ck(_v,4,0,'/profile/',_v.context.$implicit.id);
    _ck(_v,3,0,currVal_2);
  },(_ck,_v) => {
    const currVal_0:any = i1.ɵnov(_v,3).target;
    const currVal_1:any = i1.ɵnov(_v,3).href;
    _ck(_v,2,0,currVal_0,currVal_1);
    const currVal_3:any = _v.context.$implicit.username;
    _ck(_v,5,0,currVal_3);
  });
}
function View_PaginaComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),65,'div',[['class',
      'container-full']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵeld(2,0,(null as any),
          (null as any),28,'header',[['class','row']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
          ['\n\n        '])),(_l()(),i1.ɵeld(4,0,(null as any),(null as any),25,'nav',
          [['class','col-md-12']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n            '])),(_l()(),
          i1.ɵeld(6,0,(null as any),(null as any),4,'div',[['class','nav nav-brand nav-header']],
              (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n                '])),(_l()(),i1.ɵeld(8,
          0,(null as any),(null as any),1,'h1',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(9,(null as any),
          ['',''])),(_l()(),i1.ɵted(-1,(null as any),['\n            '])),(_l()(),
          i1.ɵted(-1,(null as any),['\n            '])),(_l()(),i1.ɵeld(12,0,(null as any),
          (null as any),4,'div',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n                '])),
      (_l()(),i1.ɵeld(14,0,(null as any),(null as any),1,'p',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(15,
          (null as any),['By: ',''])),(_l()(),i1.ɵted(-1,(null as any),['\n            '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n            '])),(_l()(),i1.ɵeld(18,0,(null as any),
          (null as any),10,'ul',[['class','nav nav-pills']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
          ['\n                '])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),
          1,(null as any),View_PaginaComponent_2)),i1.ɵdid(21,16384,(null as any),
          0,i3.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),
      (_l()(),i1.ɵted(-1,(null as any),['\n                '])),(_l()(),i1.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_PaginaComponent_3)),i1.ɵdid(24,
          16384,(null as any),0,i3.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,
              'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n                '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_PaginaComponent_4)),
      i1.ɵdid(27,16384,(null as any),0,i3.NgIf,[i1.ViewContainerRef,i1.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n            '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n        '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n    '])),(_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵeld(32,
          0,(null as any),(null as any),19,'div',[['class','col-xs-10']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['\n        '])),(_l()(),i1.ɵeld(34,0,(null as any),(null as any),
          4,'div',[['class','row']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n            '])),(_l()(),
          i1.ɵeld(36,0,(null as any),(null as any),1,'app-postList',([] as any[]),
              (null as any),(null as any),(null as any),i4.View_PostListComponent_0,
              i4.RenderType_PostListComponent)),i1.ɵdid(37,49152,(null as any),0,i5.PostListComponent,
          [i6.DomSanitizer,i2.Router,i7.PostService],{posts:[0,'posts']},(null as any)),
      (_l()(),i1.ɵted(-1,(null as any),['\n        '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n        '])),(_l()(),i1.ɵeld(40,0,(null as any),(null as any),10,'div',
          [['class','row']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n            '])),(_l()(),
          i1.ɵeld(42,0,(null as any),(null as any),7,'form',[['novalidate','']],[[2,
              'ng-untouched',(null as any)],[2,'ng-touched',(null as any)],[2,'ng-pristine',
              (null as any)],[2,'ng-dirty',(null as any)],[2,'ng-valid',(null as any)],
              [2,'ng-invalid',(null as any)],[2,'ng-pending',(null as any)]],[[(null as any),
              'submit'],[(null as any),'reset']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('submit' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,44).onSubmit($event)) !== false);
              ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,44).onReset()) !== false);
              ad = (pd_1 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(43,16384,(null as any),0,i8.ɵbf,
          ([] as any[]),(null as any),(null as any)),i1.ɵdid(44,16384,(null as any),
          0,i8.NgForm,[[8,(null as any)],[8,(null as any)]],(null as any),(null as any)),
      i1.ɵprd(2048,(null as any),i8.ControlContainer,(null as any),[i8.NgForm]),i1.ɵdid(46,
          16384,(null as any),0,i8.NgControlStatusGroup,[i8.ControlContainer],(null as any),
          (null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n                '])),
      (_l()(),i1.ɵeld(48,0,(null as any),(null as any),0,'input',[['class','form-controlcol-xs-4'],
          ['min','1'],['placeholder','Page'],['required',''],['type','number']],[[8,
          'max',0],[8,'value',0]],(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n            '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n        '])),(_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵted(-1,
          (null as any),['\n    '])),(_l()(),i1.ɵeld(53,0,(null as any),(null as any),
          11,'div',[['class','col-xs-2']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n        '])),
      (_l()(),i1.ɵeld(55,0,(null as any),(null as any),5,'p',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵeld(56,
          0,(null as any),(null as any),1,'b',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
          ['List of mods'])),(_l()(),i1.ɵted(-1,(null as any),[' '])),(_l()(),i1.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_PaginaComponent_5)),i1.ɵdid(60,
          16384,(null as any),0,i3.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,
              'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n        '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_PaginaComponent_6)),
      i1.ɵdid(63,802816,(null as any),0,i3.NgForOf,[i1.ViewContainerRef,i1.TemplateRef,
          i1.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i1.ɵted(-1,
          (null as any),['\n    '])),(_l()(),i1.ɵted(-1,(null as any),['\n']))],(_ck,
      _v) => {
    var _co:any = _v.component;
    const currVal_2:boolean = ((!_co.subscribed && !_co.isOwner()) && _co.authService.isLoggedIn());
    _ck(_v,21,0,currVal_2);
    const currVal_3:any = ((_co.subscribed && !_co.isOwner()) && _co.authService.isLoggedIn());
    _ck(_v,24,0,currVal_3);
    const currVal_4:any = _co.ingelogd;
    _ck(_v,27,0,currVal_4);
    const currVal_5:any = _co.posts;
    _ck(_v,37,0,currVal_5);
    const currVal_15:any = (_co.isOwner() || _co.isMod());
    _ck(_v,60,0,currVal_15);
    const currVal_16:any = _co.mods;
    _ck(_v,63,0,currVal_16);
  },(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.thispage.naam;
    _ck(_v,9,0,currVal_0);
    const currVal_1:any = _co.owner.username;
    _ck(_v,15,0,currVal_1);
    const currVal_6:any = i1.ɵnov(_v,46).ngClassUntouched;
    const currVal_7:any = i1.ɵnov(_v,46).ngClassTouched;
    const currVal_8:any = i1.ɵnov(_v,46).ngClassPristine;
    const currVal_9:any = i1.ɵnov(_v,46).ngClassDirty;
    const currVal_10:any = i1.ɵnov(_v,46).ngClassValid;
    const currVal_11:any = i1.ɵnov(_v,46).ngClassInvalid;
    const currVal_12:any = i1.ɵnov(_v,46).ngClassPending;
    _ck(_v,42,0,currVal_6,currVal_7,currVal_8,currVal_9,currVal_10,currVal_11,currVal_12);
    const currVal_13:any = i1.ɵinlineInterpolate(1,'',_co.maxpages,'');
    const currVal_14:any = i1.ɵinlineInterpolate(1,'',_co.pagina,'');
    _ck(_v,48,0,currVal_13,currVal_14);
  });
}
export function View_PaginaComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),
      View_PaginaComponent_1)),i1.ɵdid(1,16384,(null as any),0,i3.NgIf,[i1.ViewContainerRef,
      i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any))],(_ck,_v) => {
    var _co:i9.PaginaComponent = _v.component;
    const currVal_0:any = (_co.thispage != (null as any));
    _ck(_v,1,0,currVal_0);
  },(null as any));
}
export function View_PaginaComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'app-pagina',
      ([] as any[]),(null as any),(null as any),(null as any),View_PaginaComponent_0,
      RenderType_PaginaComponent)),i1.ɵdid(1,114688,(null as any),0,i9.PaginaComponent,
      [i6.DomSanitizer,i2.ActivatedRoute,i10.AuthService,i11.PaginaService,i7.PostService],
      (null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const PaginaComponentNgFactory:i1.ComponentFactory<i9.PaginaComponent> = i1.ɵccf('app-pagina',
    i9.PaginaComponent,View_PaginaComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvcm9ieWQvRG9jdW1lbnRzL1NjaG9vbC9EaXRKYWFyL01FQU4vUFJPSkVDVC9hc3NldHMvYXBwL3BhZ2luYS9wYWdpbmEuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzL3JvYnlkL0RvY3VtZW50cy9TY2hvb2wvRGl0SmFhci9NRUFOL1BST0pFQ1QvYXNzZXRzL2FwcC9wYWdpbmEvcGFnaW5hLmNvbXBvbmVudC50cyIsIm5nOi8vL0M6L1VzZXJzL3JvYnlkL0RvY3VtZW50cy9TY2hvb2wvRGl0SmFhci9NRUFOL1BST0pFQ1QvYXNzZXRzL2FwcC9wYWdpbmEvcGFnaW5hLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvcm9ieWQvRG9jdW1lbnRzL1NjaG9vbC9EaXRKYWFyL01FQU4vUFJPSkVDVC9hc3NldHMvYXBwL3BhZ2luYS9wYWdpbmEuY29tcG9uZW50LnRzLlBhZ2luYUNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXYgY2xhc3M9XCJjb250YWluZXItZnVsbFwiICpuZ0lmPVwidGhpc3BhZ2UgIT0gbnVsbFwiPlxyXG4gICAgPGhlYWRlciBjbGFzcz1cInJvd1wiPlxyXG5cclxuICAgICAgICA8bmF2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXYgbmF2LWJyYW5kIG5hdi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMT57e3RoaXNwYWdlLm5hYW19fTwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+Qnk6IHt7b3duZXIudXNlcm5hbWV9fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtcGlsbHNcIj5cclxuICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cIiFzdWJzY3JpYmVkICYmICFpc093bmVyKCkgJiYgYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpXCIgKGNsaWNrKT1cIlNldFN1YnNjcmliZSgpXCI+PGE+U3Vic2NyaWJlPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cInN1YnNjcmliZWQgJiYgIWlzT3duZXIoKSAmJiBhdXRoU2VydmljZS5pc0xvZ2dlZEluKClcIiAoY2xpY2spPVwidW5zdWJzY3JpYmUoKVwiPjxhPnVudWJzY3JpYmU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpICpuZ0lmPVwiaW5nZWxvZ2RcIiBbcm91dGVyTGlua109XCJbJy9wL21ha2Vwb3N0JywgdGhzaUlEXVwiPjxhPk1ha2UgUG9zdDwvYT48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICA8YXBwLXBvc3RMaXN0IFtwb3N0c109XCJwb3N0c1wiPjwvYXBwLXBvc3RMaXN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xjb2wteHMtNFwiIG1pbj1cIjFcIiBtYXg9XCJ7e21heHBhZ2VzfX1cIiB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhZ2VcIiB2YWx1ZT1cInt7cGFnaW5hfX1cIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTJcIj5cclxuICAgICAgICA8cD48Yj5MaXN0IG9mIG1vZHM8L2I+IDxhICpuZ0lmPVwiaXNPd25lcigpIHx8IGlzTW9kKClcIlxyXG4gICAgICAgIFtyb3V0ZXJMaW5rXT1cIlsnL3AvbW9kcy8nLHRoaXNwYWdlLmlkXVwiPihlZGl0IG1vZHMpPC9hPjwvcD5cclxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBtb2Qgb2YgbW9kc1wiPlxyXG4gICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9wcm9maWxlLycsIG1vZC5pZF1cIj5cclxuICAgICAgICAgICAgICAgIHt7bW9kLnVzZXJuYW1lfX1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PiIsIjxhcHAtcGFnaW5hPjwvYXBwLXBhZ2luYT4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDV2dCO01BQUE7UUFBQTtRQUFBO1FBQWtFO1VBQUE7VUFBQTtRQUFBO1FBQWxFO01BQUEsZ0NBQTJGO01BQUE7TUFBQSxnQkFBRyxpREFBYTtNQUFBOzs7b0JBRTNHO01BQUE7UUFBQTtRQUFBO1FBQWlFO1VBQUE7VUFBQTtRQUFBO1FBQWpFO01BQUEsZ0NBQXlGO01BQUE7TUFBQSxnQkFBRyxrREFBYztNQUFBOzs7b0JBRTFHO01BQUE7UUFBQTtRQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7TUFBQSx1Q0FBQTtNQUFBO1VBQUEscUNBQXFCLE1BQXVDO01BQUE7TUFBQSw4QkFBRzs7O1FBQTFDO1FBQXJCLFdBQXFCLFNBQXJCOzs7O29CQWdCZTtNQUFBO1FBQUE7UUFBQTtVQUFBO2NBQUE7VUFBQTtRQUFBO1FBQUE7TUFBQSx1Q0FBQTtNQUFBO01BQUEsc0JBQ3ZCLE1BQXdDOzs7UUFBeEM7UUFEdUIsV0FDdkIsU0FEdUI7O1FBQUE7UUFBQTtRQUFBLFdBQUEsbUJBQUE7Ozs7b0JBRXZCO01BQUEsd0VBQThCO2FBQUEsdUNBQzFCO01BQUE7VUFBQTtRQUFBO1FBQUE7VUFBQTtjQUFBO1VBQUE7UUFBQTtRQUFBO01BQUEsdUNBQUE7TUFBQTtNQUFBLHNCQUFHLE1BQXFDO01BQUEsb0JBRXBDOztJQUZEO0lBQUgsV0FBRyxTQUFIOztJQUFBO0lBQUE7SUFBQSxXQUFBLG1CQUFBO0lBQXdDO0lBQUE7Ozs7b0JBbENwRDtNQUFBO01BQXFELDhDQUNqRDtVQUFBO1VBQUEsNENBQW9CO1VBQUEsbUJBRWhCO1VBQUE7VUFBQSxnQkFBdUIsc0RBQ25CO2lCQUFBO2NBQUE7TUFBc0MsMERBQ2xDO1VBQUE7VUFBQSw0Q0FBSTtVQUFBLFVBQXNCLHNEQUN4QjtpQkFBQSx1Q0FDTjtVQUFBO1VBQUEsOEJBQUs7TUFDRDtVQUFBLDBEQUFHO1VBQUEsNEJBQTBCO01BQzNCLHNEQUNOO1VBQUE7VUFBQSw0Q0FBMEI7VUFBQSx5QkFDdEI7VUFBQSxnREFBQTtVQUFBO01BQ0ssMERBQ0w7VUFBQSw0RUFBQTtVQUFBO2NBQUEsd0JBQ0s7TUFDTDthQUFBO1VBQUEsaUNBQWlGO01BQ2hGLGtEQUNIO1VBQUEsYUFDRCw4Q0FDVDtVQUFBO1VBQUEsMERBQXVCO1VBQUEsK0JBQ25CO1VBQUE7VUFBQSxnQkFBaUIsc0RBQ2I7aUJBQUE7Y0FBQTs2Q0FBQSxVQUFBO1VBQUE7TUFBNkMsa0RBQzNDO1VBQUEsaUJBQ047VUFBQTtVQUFBLGdCQUFpQixzREFDYjtpQkFBQTtjQUFBO2NBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7VUFBQSx1Q0FBQTtVQUFBLGtEQUFBO1VBQUE7YUFBQSwwRUFBQTtVQUFBO1VBQUEsZUFBTTtNQUNGO1VBQUE7VUFBQTtNQUNzRCxzREFDbkQ7VUFBQSxpQkFDTCw4Q0FDSjtVQUFBLDJCQUNOO1VBQUE7VUFBQSw4QkFBc0I7TUFDbEI7VUFBQSwwREFBRztVQUFBO1VBQUEsNENBQUc7VUFBQSxtQkFBZ0IseUNBQUM7VUFBQSw0RUFBQTtVQUFBO2NBQUEsd0JBQ29DO01BQzNEO2FBQUE7NEJBQUEseUNBSU07VUFBQSwyQkFDSjs7O0lBM0JVO0lBQUosWUFBSSxTQUFKO0lBRUk7SUFBSixZQUFJLFNBQUo7SUFFSTtJQUFKLFlBQUksU0FBSjtJQU1VO0lBQWQsWUFBYyxTQUFkO0lBVXNCO0lBQUgsWUFBRyxVQUFIO0lBRWxCO0lBQUwsWUFBSyxVQUFMOzs7SUE1Qlk7SUFBQTtJQUdEO0lBQUE7SUFnQlA7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQSxZQUFBLHdFQUFBO0lBQ2dEO0lBQ2xCO0lBRDFCLFlBQTRDLFdBQ2xCLFVBRDFCOzs7O29CQXpCaEI7TUFBQSxnQ0FBQTtvQkFBQTs7SUFBNEI7SUFBNUIsV0FBNEIsU0FBNUI7Ozs7b0JDQUE7TUFBQTtnQ0FBQSxVQUFBO01BQUE7TUFBQTtJQUFBOzs7OyJ9

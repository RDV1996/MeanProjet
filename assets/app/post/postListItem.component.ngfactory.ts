/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './postListItem.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/common';
import * as i3 from '@angular/router';
import * as i4 from './postListItem.component';
import * as i5 from '../service/comment.service';
import * as i6 from '../service/typeGebruiker.service';
import * as i7 from '@angular/platform-browser';
import * as i8 from '../service/post.service';
import * as i9 from '../service/auth.service';
import * as i10 from '../service/pagina.service';
const styles_PostListItemComponent:any[] = [i0.styles];
export const RenderType_PostListItemComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_PostListItemComponent,data:{}});
function View_PostListItemComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),3,'button',[['class',
      'upvoted btn btn-default'],['type','button']],(null as any),[[(null as any),
      'click']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>_co.upvote()) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n            '])),
      (_l()(),i1.ɵeld(2,0,(null as any),(null as any),0,'span',[['aria-hidden','true'],
          ['class','glyphicon glyphicon-arrow-up sm']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
          ['\n        ']))],(null as any),(null as any));
}
function View_PostListItemComponent_3(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),3,'button',[['class',
      'unUpvoted btn btn-default'],['type','button']],(null as any),[[(null as any),
      'click']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>_co.upvote()) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n\n            '])),
      (_l()(),i1.ɵeld(2,0,(null as any),(null as any),0,'span',[['aria-hidden','true'],
          ['class','glyphicon glyphicon-arrow-up sm']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
          ['\n        ']))],(null as any),(null as any));
}
function View_PostListItemComponent_4(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),3,'a',[['target',
      '_blank']],[[8,'href',4]],(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n            '])),(_l()(),i1.ɵeld(2,0,(null as any),
          (null as any),0,'img',[['class','img-responsive center-block']],[[8,'src',
              4]],(null as any),(null as any),(null as any),(null as any))),(_l()(),
          i1.ɵted(-1,(null as any),['\n        ']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = i1.ɵinlineInterpolate(1,'',_co.post.url,'');
    _ck(_v,0,0,currVal_0);
    const currVal_1:any = _co.sanitizer.bypassSecurityTrustResourceUrl(_co.post.url);
    _ck(_v,2,0,currVal_1);
  });
}
function View_PostListItemComponent_5(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),3,'a',[['target',
      '_blank']],[[8,'href',4]],(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n            '])),(_l()(),i1.ɵeld(2,0,(null as any),
          (null as any),0,'img',[['class','img-responsive center-block']],[[8,'src',
              4]],(null as any),(null as any),(null as any),(null as any))),(_l()(),
          i1.ɵted(-1,(null as any),['\n        ']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = i1.ɵinlineInterpolate(1,'https://www.youtube.com/watch?v=',
        _co.post.url,'');
    _ck(_v,0,0,currVal_0);
    const currVal_1:any = _co.sanitizer.bypassSecurityTrustResourceUrl((('https://img.youtube.com/vi/' + _co.post.url) + '/hqdefault.jpg'));
    _ck(_v,2,0,currVal_1);
  });
}
function View_PostListItemComponent_6(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),4,'div',[['class',
      'config']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),[' |\n                    '])),(_l()(),i1.ɵeld(2,
          0,(null as any),(null as any),1,'button',[['class','button']],(null as any),
          [[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.onDelete(_co.post.id)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n                        Delete\n                    '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n                ']))],(null as any),(null as any));
}
function View_PostListItemComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),58,'div',[['class',
      'row post']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵeld(2,0,(null as any),
          (null as any),7,'div',[['class','col-xs-2 listnumber']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(3,(null as any),
          ['\n        ','\n        '])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),
          1,(null as any),View_PostListItemComponent_2)),i1.ɵdid(5,16384,(null as any),
          0,i2.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),
      (_l()(),i1.ɵted(-1,(null as any),['\n        '])),(_l()(),i1.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_PostListItemComponent_3)),i1.ɵdid(8,16384,
          (null as any),0,i2.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},
          (null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵted(-1,
          (null as any),['\n    '])),(_l()(),i1.ɵeld(11,0,(null as any),(null as any),
          7,'div',[['class','col-xs-2 img-center']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n        '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_PostListItemComponent_4)),
      i1.ɵdid(14,16384,(null as any),0,i2.NgIf,[i1.ViewContainerRef,i1.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n        '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_PostListItemComponent_5)),
      i1.ɵdid(17,16384,(null as any),0,i2.NgIf,[i1.ViewContainerRef,i1.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n    '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵeld(20,0,(null as any),
          (null as any),37,'div',[['class','col-xs-8 listname']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
          ['\n        '])),(_l()(),i1.ɵeld(22,0,(null as any),(null as any),34,'div',
          [['class','col-xs-12']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n            '])),(_l()(),
          i1.ɵeld(24,0,(null as any),(null as any),6,'h3',[['class','row']],(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['\n                '])),(_l()(),i1.ɵeld(26,0,(null as any),
          (null as any),3,'a',([] as any[]),[[1,'target',0],[8,'href',4]],[[(null as any),
              'click']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,27).onClick($event.button,$event.ctrlKey,
                  $event.metaKey,$event.shiftKey)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(27,671744,(null as any),0,i3.RouterLinkWithHref,
          [i3.Router,i3.ActivatedRoute,i2.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),i1.ɵpad(28,2),(_l()(),i1.ɵted(29,(null as any),['\n                    ',
          '\n                '])),(_l()(),i1.ɵted(-1,(null as any),['\n            '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n            '])),(_l()(),i1.ɵeld(32,0,(null as any),
          (null as any),9,'div',[['class','row']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n                '])),
      (_l()(),i1.ɵeld(34,0,(null as any),(null as any),6,'div',[['class','page']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n                    '])),(_l()(),i1.ɵeld(36,
          0,(null as any),(null as any),3,'a',([] as any[]),[[1,'target',0],[8,'href',
              4]],[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,37).onClick($event.button,$event.ctrlKey,
                  $event.metaKey,$event.shiftKey)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(37,671744,(null as any),0,i3.RouterLinkWithHref,
          [i3.Router,i3.ActivatedRoute,i2.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),i1.ɵpad(38,2),(_l()(),i1.ɵted(39,(null as any),['\n                        ',
          '\n                    '])),(_l()(),i1.ɵted(-1,(null as any),['\n                '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n            '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n            '])),(_l()(),i1.ɵeld(43,0,(null as any),(null as any),12,
          'div',[['class','row']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n                '])),
      (_l()(),i1.ɵeld(45,0,(null as any),(null as any),6,'div',[['class','author']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n                    '])),(_l()(),i1.ɵeld(47,
          0,(null as any),(null as any),3,'a',([] as any[]),[[1,'target',0],[8,'href',
              4]],[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,48).onClick($event.button,$event.ctrlKey,
                  $event.metaKey,$event.shiftKey)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(48,671744,(null as any),0,i3.RouterLinkWithHref,
          [i3.Router,i3.ActivatedRoute,i2.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),i1.ɵpad(49,2),(_l()(),i1.ɵted(50,(null as any),['\n                        ',
          '\n                    '])),(_l()(),i1.ɵted(-1,(null as any),['\n                '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n                '])),(_l()(),i1.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_PostListItemComponent_6)),
      i1.ɵdid(54,16384,(null as any),0,i2.NgIf,[i1.ViewContainerRef,i1.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n            '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n        '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n    '])),(_l()(),i1.ɵted(-1,(null as any),['\n']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_1:any = ((_co.post.likes.indexOf(_co.authService.user.id) != (0 - 1)) && _co.authService.isLoggedIn());
    _ck(_v,5,0,currVal_1);
    const currVal_2:any = ((_co.post.likes.indexOf(_co.authService.user.id) == (0 - 1)) && _co.authService.isLoggedIn());
    _ck(_v,8,0,currVal_2);
    const currVal_3:boolean = !_co.post.isVideo;
    _ck(_v,14,0,currVal_3);
    const currVal_4:any = _co.post.isVideo;
    _ck(_v,17,0,currVal_4);
    const currVal_7:any = _ck(_v,28,0,'/p/post/',_co.post.id);
    _ck(_v,27,0,currVal_7);
    const currVal_11:any = _ck(_v,38,0,'/p/',_co.post.pagina);
    _ck(_v,37,0,currVal_11);
    const currVal_15:any = _ck(_v,49,0,'/profile/',_co.post.user);
    _ck(_v,48,0,currVal_15);
    const currVal_17:any = (((_co.post.user === _co.authService.user.id) || _co.isAdmin) || _co.isMod());
    _ck(_v,54,0,currVal_17);
  },(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.post.likes.length;
    _ck(_v,3,0,currVal_0);
    const currVal_5:any = i1.ɵnov(_v,27).target;
    const currVal_6:any = i1.ɵnov(_v,27).href;
    _ck(_v,26,0,currVal_5,currVal_6);
    const currVal_8:any = _co.post.title;
    _ck(_v,29,0,currVal_8);
    const currVal_9:any = i1.ɵnov(_v,37).target;
    const currVal_10:any = i1.ɵnov(_v,37).href;
    _ck(_v,36,0,currVal_9,currVal_10);
    const currVal_12:any = _co.page.naam;
    _ck(_v,39,0,currVal_12);
    const currVal_13:any = i1.ɵnov(_v,48).target;
    const currVal_14:any = i1.ɵnov(_v,48).href;
    _ck(_v,47,0,currVal_13,currVal_14);
    const currVal_16:any = _co.userName;
    _ck(_v,50,0,currVal_16);
  });
}
export function View_PostListItemComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),
      View_PostListItemComponent_1)),i1.ɵdid(1,16384,(null as any),0,i2.NgIf,[i1.ViewContainerRef,
      i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any))],(_ck,_v) => {
    var _co:i4.PostListItemComponent = _v.component;
    const currVal_0:any = (_co.post != (null as any));
    _ck(_v,1,0,currVal_0);
  },(null as any));
}
export function View_PostListItemComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'app-postListItem',
      ([] as any[]),(null as any),(null as any),(null as any),View_PostListItemComponent_0,
      RenderType_PostListItemComponent)),i1.ɵdid(1,114688,(null as any),0,i4.PostListItemComponent,
      [i5.CommentService,i6.TypeGebruikerService,i7.DomSanitizer,i3.Router,i8.PostService,
          i9.AuthService,i10.PaginaService],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const PostListItemComponentNgFactory:i1.ComponentFactory<i4.PostListItemComponent> = i1.ɵccf('app-postListItem',
    i4.PostListItemComponent,View_PostListItemComponent_Host_0,{post:'post'},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvUkRWL0Rlc2t0b3AvTWVhblByb2plY3QvYXNzZXRzL2FwcC9wb3N0L3Bvc3RMaXN0SXRlbS5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovVXNlcnMvUkRWL0Rlc2t0b3AvTWVhblByb2plY3QvYXNzZXRzL2FwcC9wb3N0L3Bvc3RMaXN0SXRlbS5jb21wb25lbnQudHMiLCJuZzovLy9DOi9Vc2Vycy9SRFYvRGVza3RvcC9NZWFuUHJvamVjdC9hc3NldHMvYXBwL3Bvc3QvcG9zdExpc3RJdGVtLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvUkRWL0Rlc2t0b3AvTWVhblByb2plY3QvYXNzZXRzL2FwcC9wb3N0L3Bvc3RMaXN0SXRlbS5jb21wb25lbnQudHMuUG9zdExpc3RJdGVtQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiBjbGFzcz1cInJvdyBwb3N0XCIgKm5nSWY9XCJwb3N0ICE9bnVsbFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC14cy0yIGxpc3RudW1iZXJcIj5cclxuICAgICAgICB7e3Bvc3QubGlrZXMubGVuZ3RofX1cclxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwicG9zdC5saWtlcy5pbmRleE9mKGF1dGhTZXJ2aWNlLnVzZXIuaWQpICE9IC0xICYmIGF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKVwiIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ1cHZvdGVkIGJ0biBidG4tZGVmYXVsdFwiIChjbGljayk9XCJ1cHZvdGUoKVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctdXAgc21cIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInBvc3QubGlrZXMuaW5kZXhPZihhdXRoU2VydmljZS51c2VyLmlkKSA9PSAtMSAmJiBhdXRoU2VydmljZS5pc0xvZ2dlZEluKClcIiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwidW5VcHZvdGVkIGJ0biBidG4tZGVmYXVsdFwiIChjbGljayk9XCJ1cHZvdGUoKVwiPlxyXG5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWFycm93LXVwIHNtXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTIgaW1nLWNlbnRlclwiPlxyXG4gICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiICpuZ0lmPVwiIXBvc3QuaXNWaWRlb1wiIGhyZWY9XCJ7e3Bvc3QudXJsfX1cIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1yZXNwb25zaXZlIGNlbnRlci1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgW3NyY109XCJzYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHBvc3QudXJsKVwiPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiAqbmdJZj1cInBvc3QuaXNWaWRlb1wiIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXt7cG9zdC51cmx9fVwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmUgY2VudGVyLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICBbc3JjXT1cInNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoJ2h0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpLycgKyBwb3N0LnVybCArICcvaHFkZWZhdWx0LmpwZycpXCI+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTggbGlzdG5hbWVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvcC9wb3N0LycsIHBvc3QuaWRdXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3twb3N0LnRpdGxlfX1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9wLycsIHBvc3QucGFnaW5hXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e3BhZ2UubmFhbX19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0aG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvcHJvZmlsZS8nLCBwb3N0LnVzZXJdXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHVzZXJOYW1lIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwicG9zdC51c2VyID09PSBhdXRoU2VydmljZS51c2VyLmlkIHx8IGlzQWRtaW4gfHwgaXNNb2QoKVwiIGNsYXNzPVwiY29uZmlnXCI+Jm5ic3A7fFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIiAoY2xpY2spPVwib25EZWxldGUocG9zdC5pZClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+IiwiPGFwcC1wb3N0TGlzdEl0ZW0+PC9hcHAtcG9zdExpc3RJdGVtPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ0dRO01BQUE7TUFBQTtJQUFBO0lBQUE7SUFDd0M7TUFBQTtNQUFBO0lBQUE7SUFEeEM7RUFBQSxnQ0FDMkQ7TUFDdkQ7VUFBQTtVQUFBLDRDQUNnQztVQUFBOzs7b0JBRXBDO01BQUE7TUFBQTtJQUFBO0lBQUE7SUFDMEM7TUFBQTtNQUFBO0lBQUE7SUFEMUM7RUFBQSxnQ0FDNkQ7TUFFekQ7VUFBQTtVQUFBLDRDQUNnQztVQUFBOzs7b0JBSXBDO01BQUE7TUFBNkQsc0RBQ3pEO1VBQUE7Y0FBQSw4REFDZ0U7aUJBQUE7O0lBRjNCO0lBQXpDLFdBQXlDLFNBQXpDO0lBRVM7SUFETCxXQUNLLFNBREw7Ozs7b0JBR0o7TUFBQTtNQUE0RixzREFDeEY7VUFBQTtjQUFBLDhEQUNtSDtpQkFBQTs7SUFGL0U7UUFBQTtJQUF4QyxXQUF3QyxTQUF4QztJQUVTO0lBREwsV0FDSyxTQURMOzs7O29CQXdCSTtNQUFBO01BQW9GLGdFQUNoRjtVQUFBO1VBQUE7WUFBQTtZQUFBO1lBQXVCO2NBQUE7Y0FBQTtZQUFBO1lBQXZCO1VBQUEsZ0NBQW1EO01BRTFDOzs7b0JBaEQ3QjtNQUFBO01BQTBDLDhDQUN0QztVQUFBO1VBQUEsNENBQWlDO1VBQUEsOEJBRTdCO1VBQUEsc0RBQUE7VUFBQTtNQUlTLGtEQUNUO1VBQUEsb0VBQUE7VUFBQTtVQUFBLGVBS1MsOENBQ1A7VUFBQSwyQkFDTjtVQUFBO1VBQUEsOEJBQWlDO01BQzdCO2FBQUE7VUFBQSxpQ0FHSTtNQUNKO2FBQUE7VUFBQSxpQ0FHSTtNQUNGLDhDQUNOO1VBQUE7VUFBQSw0Q0FBK0I7VUFBQSxpQkFDM0I7VUFBQTtVQUFBLGdCQUF1QixzREFDbkI7aUJBQUE7Y0FBQSwwREFBZ0I7VUFBQSx1Q0FDWjtVQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7a0JBQUE7Y0FBQTtZQUFBO1lBQUE7VUFBQSx1Q0FBQTtVQUFBO1VBQUEsc0JBQUcsT0FBcUM7VUFBQSx3QkFFcEM7TUFDSCxzREFDTDtVQUFBO1VBQUEsOEJBQWlCO01BQ2I7VUFBQTtNQUFrQiw4REFDZDtVQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7a0JBQUE7Y0FBQTtZQUFBO1lBQUE7VUFBQSx1Q0FBQTtVQUFBO1VBQUEsc0JBQUcsT0FBb0M7VUFBQSw0QkFFbkM7TUFDRixzREFDSjtVQUFBLHFCQUNOO1VBQUE7VUFBQSxnQkFBaUI7TUFDYjtVQUFBO01BQW9CLDhEQUNoQjtVQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7a0JBQUE7Y0FBQTtZQUFBO1lBQUE7VUFBQSx1Q0FBQTtVQUFBO1VBQUEsc0JBQUcsT0FBd0M7VUFBQSw0QkFFdkM7TUFDRiwwREFDTjtVQUFBO2FBQUE7VUFBQSxpQ0FJTTtNQUNKLGtEQUNKO1VBQUEsYUFDSjs7SUFqRE07SUFBUixXQUFRLFNBQVI7SUFLUTtJQUFSLFdBQVEsU0FBUjtJQVFtQjtJQUFuQixZQUFtQixTQUFuQjtJQUltQjtJQUFuQixZQUFtQixTQUFuQjtJQVFXO0lBQUgsWUFBRyxTQUFIO0lBTU87SUFBSCxZQUFHLFVBQUg7SUFPRztJQUFILFlBQUcsVUFBSDtJQUlDO0lBQUwsWUFBSyxVQUFMOzs7SUE1Q3FCO0lBQUE7SUEyQnJCO0lBQUE7SUFBQSxZQUFBLG1CQUFBO0lBQXdDO0lBQUE7SUFNcEM7SUFBQTtJQUFBLFlBQUEsb0JBQUE7SUFBdUM7SUFBQTtJQU92QztJQUFBO0lBQUEsWUFBQSxxQkFBQTtJQUEyQztJQUFBOzs7O29CQXpDL0Q7TUFBQSxzQ0FBQTtvQkFBQTs7SUFBc0I7SUFBdEIsV0FBc0IsU0FBdEI7Ozs7b0JDQUE7TUFBQTtzQ0FBQSxVQUFBO01BQUE7MENBQUE7SUFBQTs7OzsifQ==

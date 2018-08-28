/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './makePost.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from './makePost.component';
import * as i3 from '@angular/forms';
import * as i4 from '@angular/router';
import * as i5 from '@angular/common';
import * as i6 from '../service/pagina.service';
import * as i7 from '../service/auth.service';
import * as i8 from '../service/post.service';
const styles_MakePostComponent:any[] = [i0.styles];
export const RenderType_MakePostComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_MakePostComponent,data:{}});
export function View_MakePostComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),51,'div',[['class',
      'col-md-4 col-md-offset-4']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵeld(2,
      0,(null as any),(null as any),45,'form',[['novalidate','']],[[2,'ng-untouched',
          (null as any)],[2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],
          [2,'ng-dirty',(null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',
              (null as any)],[2,'ng-pending',(null as any)]],[[(null as any),'ngSubmit'],
          [(null as any),'submit'],[(null as any),'reset']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i2.MakePostComponent = _v.component;
        if (('submit' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,4).onSubmit($event)) !== false);
          ad = (pd_0 && ad);
        }
        if (('reset' === en)) {
          const pd_1:any = ((<any>i1.ɵnov(_v,4).onReset()) !== false);
          ad = (pd_1 && ad);
        }
        if (('ngSubmit' === en)) {
          const pd_2:any = ((<any>_co.onSubmit()) !== false);
          ad = (pd_2 && ad);
        }
        return ad;
      },(null as any),(null as any))),i1.ɵdid(3,16384,(null as any),0,i3.ɵbf,([] as any[]),
      (null as any),(null as any)),i1.ɵdid(4,540672,(null as any),0,i3.FormGroupDirective,
      [[8,(null as any)],[8,(null as any)]],{form:[0,'form']},{ngSubmit:'ngSubmit'}),
      i1.ɵprd(2048,(null as any),i3.ControlContainer,(null as any),[i3.FormGroupDirective]),
      i1.ɵdid(6,16384,(null as any),0,i3.NgControlStatusGroup,[i3.ControlContainer],
          (null as any),(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n        '])),
      (_l()(),i1.ɵeld(8,0,(null as any),(null as any),11,'div',[['class','form-group']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n            '])),(_l()(),i1.ɵeld(10,0,(null as any),
          (null as any),1,'label',[['for','title']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['Title'])),
      (_l()(),i1.ɵted(-1,(null as any),['\n            '])),(_l()(),i1.ɵeld(13,0,(null as any),
          (null as any),5,'input',[['class','form-control'],['formControlName','title'],
              ['id','title'],['type','text']],[[2,'ng-untouched',(null as any)],[2,
              'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',
              (null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],
              [2,'ng-pending',(null as any)]],[[(null as any),'input'],[(null as any),
              'blur'],[(null as any),'compositionstart'],[(null as any),'compositionend']],
          (_v,en,$event) => {
            var ad:boolean = true;
            if (('input' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,14)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,14).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i1.ɵnov(_v,14)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i1.ɵnov(_v,14)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(14,16384,(null as any),0,i3.DefaultValueAccessor,
          [i1.Renderer2,i1.ElementRef,[2,i3.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i1.ɵprd(1024,(null as any),i3.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i3.DefaultValueAccessor]),i1.ɵdid(16,671744,(null as any),0,i3.FormControlName,
          [[3,i3.ControlContainer],[8,(null as any)],[8,(null as any)],[2,i3.NG_VALUE_ACCESSOR]],
          {name:[0,'name']},(null as any)),i1.ɵprd(2048,(null as any),i3.NgControl,
          (null as any),[i3.FormControlName]),i1.ɵdid(18,16384,(null as any),0,i3.NgControlStatus,
          [i3.NgControl],(null as any),(null as any)),(_l()(),i1.ɵted(-1,(null as any),
          ['\n        '])),(_l()(),i1.ɵted(-1,(null as any),['\n        '])),(_l()(),
          i1.ɵeld(21,0,(null as any),(null as any),11,'div',[['class','form-group']],
              (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n            '])),(_l()(),i1.ɵeld(23,0,(null as any),
          (null as any),1,'label',[['for','url']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['URL:'])),
      (_l()(),i1.ɵted(-1,(null as any),['\n            '])),(_l()(),i1.ɵeld(26,0,(null as any),
          (null as any),5,'input',[['class','form-control'],['formControlName','url'],
              ['id','url'],['type','text']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',
              (null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],
              [2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',
                  (null as any)]],[[(null as any),'input'],[(null as any),'blur'],
              [(null as any),'compositionstart'],[(null as any),'compositionend']],
          (_v,en,$event) => {
            var ad:boolean = true;
            if (('input' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,27)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,27).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i1.ɵnov(_v,27)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i1.ɵnov(_v,27)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(27,16384,(null as any),0,i3.DefaultValueAccessor,
          [i1.Renderer2,i1.ElementRef,[2,i3.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i1.ɵprd(1024,(null as any),i3.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i3.DefaultValueAccessor]),i1.ɵdid(29,671744,(null as any),0,i3.FormControlName,
          [[3,i3.ControlContainer],[8,(null as any)],[8,(null as any)],[2,i3.NG_VALUE_ACCESSOR]],
          {name:[0,'name']},(null as any)),i1.ɵprd(2048,(null as any),i3.NgControl,
          (null as any),[i3.FormControlName]),i1.ɵdid(31,16384,(null as any),0,i3.NgControlStatus,
          [i3.NgControl],(null as any),(null as any)),(_l()(),i1.ɵted(-1,(null as any),
          ['\n        '])),(_l()(),i1.ɵted(-1,(null as any),['\n        '])),(_l()(),
          i1.ɵeld(34,0,(null as any),(null as any),4,'div',[['class','form-group']],
              (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n            '])),(_l()(),i1.ɵeld(36,0,(null as any),
          (null as any),1,'label',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(37,(null as any),['',''])),
      (_l()(),i1.ɵted(-1,(null as any),['\n        '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n        '])),(_l()(),i1.ɵeld(40,0,(null as any),(null as any),1,'button',
          [['class','btn btn-primary'],['type','submit']],[[8,'disabled',0]],(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
          ['Submit'])),(_l()(),i1.ɵted(-1,(null as any),['\n        '])),(_l()(),i1.ɵeld(43,
          0,(null as any),(null as any),3,'a',[['class','btn btn-error']],[[1,'target',
              0],[8,'href',4]],[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,44).onClick($event.button,$event.ctrlKey,
                  $event.metaKey,$event.shiftKey)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(44,671744,(null as any),0,i4.RouterLinkWithHref,
          [i4.Router,i4.ActivatedRoute,i5.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),i1.ɵpad(45,2),(_l()(),i1.ɵted(-1,(null as any),['Cancel'])),
      (_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n    '])),(_l()(),i1.ɵeld(49,0,(null as any),(null as any),1,'div',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n\n    '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n']))],(_ck,_v) => {
    var _co:i2.MakePostComponent = _v.component;
    const currVal_7:any = _co.makePostForm;
    _ck(_v,4,0,currVal_7);
    const currVal_15:any = 'title';
    _ck(_v,16,0,currVal_15);
    const currVal_23:any = 'url';
    _ck(_v,29,0,currVal_23);
    const currVal_28:any = _ck(_v,45,0,'/p/',_co.paginaId);
    _ck(_v,44,0,currVal_28);
  },(_ck,_v) => {
    var _co:i2.MakePostComponent = _v.component;
    const currVal_0:any = i1.ɵnov(_v,6).ngClassUntouched;
    const currVal_1:any = i1.ɵnov(_v,6).ngClassTouched;
    const currVal_2:any = i1.ɵnov(_v,6).ngClassPristine;
    const currVal_3:any = i1.ɵnov(_v,6).ngClassDirty;
    const currVal_4:any = i1.ɵnov(_v,6).ngClassValid;
    const currVal_5:any = i1.ɵnov(_v,6).ngClassInvalid;
    const currVal_6:any = i1.ɵnov(_v,6).ngClassPending;
    _ck(_v,2,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
    const currVal_8:any = i1.ɵnov(_v,18).ngClassUntouched;
    const currVal_9:any = i1.ɵnov(_v,18).ngClassTouched;
    const currVal_10:any = i1.ɵnov(_v,18).ngClassPristine;
    const currVal_11:any = i1.ɵnov(_v,18).ngClassDirty;
    const currVal_12:any = i1.ɵnov(_v,18).ngClassValid;
    const currVal_13:any = i1.ɵnov(_v,18).ngClassInvalid;
    const currVal_14:any = i1.ɵnov(_v,18).ngClassPending;
    _ck(_v,13,0,currVal_8,currVal_9,currVal_10,currVal_11,currVal_12,currVal_13,currVal_14);
    const currVal_16:any = i1.ɵnov(_v,31).ngClassUntouched;
    const currVal_17:any = i1.ɵnov(_v,31).ngClassTouched;
    const currVal_18:any = i1.ɵnov(_v,31).ngClassPristine;
    const currVal_19:any = i1.ɵnov(_v,31).ngClassDirty;
    const currVal_20:any = i1.ɵnov(_v,31).ngClassValid;
    const currVal_21:any = i1.ɵnov(_v,31).ngClassInvalid;
    const currVal_22:any = i1.ɵnov(_v,31).ngClassPending;
    _ck(_v,26,0,currVal_16,currVal_17,currVal_18,currVal_19,currVal_20,currVal_21,
        currVal_22);
    const currVal_24:any = _co.error;
    _ck(_v,37,0,currVal_24);
    const currVal_25:boolean = !_co.makePostForm.valid;
    _ck(_v,40,0,currVal_25);
    const currVal_26:any = i1.ɵnov(_v,44).target;
    const currVal_27:any = i1.ɵnov(_v,44).href;
    _ck(_v,43,0,currVal_26,currVal_27);
  });
}
export function View_MakePostComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'app-makePost',
      ([] as any[]),(null as any),(null as any),(null as any),View_MakePostComponent_0,
      RenderType_MakePostComponent)),i1.ɵdid(1,114688,(null as any),0,i2.MakePostComponent,
      [i6.PaginaService,i4.Router,i7.AuthService,i8.PostService,i4.ActivatedRoute],
      (null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const MakePostComponentNgFactory:i1.ComponentFactory<i2.MakePostComponent> = i1.ɵccf('app-makePost',
    i2.MakePostComponent,View_MakePostComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvcm9ieWQvRG9jdW1lbnRzL1NjaG9vbC9EaXRKYWFyL01FQU4vUFJPSkVDVC9hc3NldHMvYXBwL3Bvc3QvbWFrZVBvc3QuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzL3JvYnlkL0RvY3VtZW50cy9TY2hvb2wvRGl0SmFhci9NRUFOL1BST0pFQ1QvYXNzZXRzL2FwcC9wb3N0L21ha2VQb3N0LmNvbXBvbmVudC50cyIsIm5nOi8vL0M6L1VzZXJzL3JvYnlkL0RvY3VtZW50cy9TY2hvb2wvRGl0SmFhci9NRUFOL1BST0pFQ1QvYXNzZXRzL2FwcC9wb3N0L21ha2VQb3N0LmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvcm9ieWQvRG9jdW1lbnRzL1NjaG9vbC9EaXRKYWFyL01FQU4vUFJPSkVDVC9hc3NldHMvYXBwL3Bvc3QvbWFrZVBvc3QuY29tcG9uZW50LnRzLk1ha2VQb3N0Q29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiBjbGFzcz1cImNvbC1tZC00IGNvbC1tZC1vZmZzZXQtNFwiPlxyXG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJtYWtlUG9zdEZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZm9ybUNvbnRyb2xOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidXJsXCI+VVJMOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidXJsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBmb3JtQ29udHJvbE5hbWU9XCJ1cmxcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+e3tlcnJvcn19PC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIFtkaXNhYmxlZF09XCIhbWFrZVBvc3RGb3JtLnZhbGlkXCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLWVycm9yXCIgW3JvdXRlckxpbmtdPVwiWycvcC8nLCBwYWdpbmFJZF1cIj5DYW5jZWw8L2E+XHJcbiAgICA8L2Zvcm0+XHJcbiAgICA8ZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj4iLCI8YXBwLW1ha2VQb3N0PjwvYXBwLW1ha2VQb3N0PiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNBQTtNQUFBO01BQUEsZ0JBQXNDLDhDQUNsQztNQUFBO1VBQUE7VUFBQTtjQUFBO1VBQUE7UUFBQTtRQUFBO1FBQUE7VUFBQTtVQUFBO1FBQUE7UUFBQTtVQUFBO1VBQUE7UUFBQTtRQUFpQztVQUFBO1VBQUE7UUFBQTtRQUFqQztNQUFBLHVDQUFBO01BQUEsb0NBQUE7TUFBQTthQUFBO2FBQUE7VUFBQSw2QkFBeUQ7TUFDckQ7VUFBQTtNQUF3QixzREFDcEI7VUFBQTtVQUFBLDhCQUFtQjtNQUFhLHNEQUNoQztVQUFBO2NBQUE7Y0FBQTtjQUFBO2NBQUE7Y0FBQTtVQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO1VBQUEsdUNBQUE7VUFBQTtVQUFBLHNCQUFBO1FBQUE7TUFBQSxvQ0FBQTtVQUFBO1VBQUEsd0NBQUE7VUFBQSwyQ0FBQTtVQUFBLDRDQUEyRTtVQUFBLGlCQUN6RSxrREFDTjtpQkFBQTtjQUFBO01BQXdCLHNEQUNwQjtVQUFBO1VBQUEsOEJBQWlCO01BQVksc0RBQzdCO1VBQUE7Y0FBQTtjQUFBO2NBQUE7a0JBQUE7Y0FBQTtVQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO1VBQUEsdUNBQUE7VUFBQTtVQUFBLHNCQUFBO1FBQUE7TUFBQSxvQ0FBQTtVQUFBO1VBQUEsd0NBQUE7VUFBQSwyQ0FBQTtVQUFBLDRDQUF1RTtVQUFBLGlCQUNyRSxrREFDTjtpQkFBQTtjQUFBO01BQXdCLHNEQUNwQjtVQUFBO1VBQUEsOEJBQU87TUFBaUIsa0RBQ3RCO1VBQUEsaUJBQ047VUFBQTtVQUFBLDRDQUErRTtVQUFBLGFBQWUsa0RBQzlGO1VBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtrQkFBQTtjQUFBO1lBQUE7WUFBQTtVQUFBLHVDQUFBO1VBQUE7VUFBQSxzQkFBeUIsT0FBaUM7TUFBVSw4Q0FDakU7VUFBQSxhQUNQO1VBQUE7TUFBSyxnREFFQztVQUFBOztJQWpCQTtJQUFOLFdBQU0sU0FBTjtJQUcyRDtJQUFuRCxZQUFtRCxVQUFuRDtJQUlpRDtJQUFqRCxZQUFpRCxVQUFqRDtJQU1xQjtJQUF6QixZQUF5QixVQUF6Qjs7O0lBYko7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQSxXQUFBLHFFQUFBO0lBR1E7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQSxZQUFBLDBFQUFBO0lBSUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQSxZQUFBO1FBQUEsVUFBQTtJQUdPO0lBQUE7SUFFbUM7SUFBOUMsWUFBOEMsVUFBOUM7SUFDQTtJQUFBO0lBQUEsWUFBQSxxQkFBQTs7OztvQkNkUjtNQUFBO2tDQUFBLFVBQUE7TUFBQTtNQUFBO0lBQUE7Ozs7In0=

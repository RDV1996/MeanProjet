/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './signup.component';
import * as i2 from '@angular/forms';
import * as i3 from '../service/auth.service';
const styles_SignupComponent:any[] = ([] as any[]);
export const RenderType_SignupComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_SignupComponent,data:{}});
export function View_SignupComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),50,'div',[['class',
      'col-md-8 col-md-offset-2']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n    '])),(_l()(),i0.ɵeld(2,
      0,(null as any),(null as any),47,'form',[['novalidate','']],[[2,'ng-untouched',
          (null as any)],[2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],
          [2,'ng-dirty',(null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',
              (null as any)],[2,'ng-pending',(null as any)]],[[(null as any),'ngSubmit'],
          [(null as any),'submit'],[(null as any),'reset']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i1.SignupComponent = _v.component;
        if (('submit' === en)) {
          const pd_0:any = ((<any>i0.ɵnov(_v,4).onSubmit($event)) !== false);
          ad = (pd_0 && ad);
        }
        if (('reset' === en)) {
          const pd_1:any = ((<any>i0.ɵnov(_v,4).onReset()) !== false);
          ad = (pd_1 && ad);
        }
        if (('ngSubmit' === en)) {
          const pd_2:any = ((<any>_co.onSubmit()) !== false);
          ad = (pd_2 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(3,16384,(null as any),0,i2.ɵbf,([] as any[]),
      (null as any),(null as any)),i0.ɵdid(4,540672,(null as any),0,i2.FormGroupDirective,
      [[8,(null as any)],[8,(null as any)]],{form:[0,'form']},{ngSubmit:'ngSubmit'}),
      i0.ɵprd(2048,(null as any),i2.ControlContainer,(null as any),[i2.FormGroupDirective]),
      i0.ɵdid(6,16384,(null as any),0,i2.NgControlStatusGroup,[i2.ControlContainer],
          (null as any),(null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n        '])),
      (_l()(),i0.ɵeld(8,0,(null as any),(null as any),11,'div',[['class','form-group']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n            '])),(_l()(),i0.ɵeld(10,0,(null as any),
          (null as any),1,'label',[['for','username']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),
          ['Username'])),(_l()(),i0.ɵted(-1,(null as any),['\n            '])),(_l()(),
          i0.ɵeld(13,0,(null as any),(null as any),5,'input',[['class','form-control'],
              ['formControlName','username'],['id','username'],['type','text']],[[2,
              'ng-untouched',(null as any)],[2,'ng-touched',(null as any)],[2,'ng-pristine',
              (null as any)],[2,'ng-dirty',(null as any)],[2,'ng-valid',(null as any)],
              [2,'ng-invalid',(null as any)],[2,'ng-pending',(null as any)]],[[(null as any),
              'input'],[(null as any),'blur'],[(null as any),'compositionstart'],[(null as any),
              'compositionend']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('input' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,14)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i0.ɵnov(_v,14).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i0.ɵnov(_v,14)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i0.ɵnov(_v,14)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(14,16384,(null as any),0,i2.DefaultValueAccessor,
          [i0.Renderer2,i0.ElementRef,[2,i2.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i0.ɵprd(1024,(null as any),i2.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i2.DefaultValueAccessor]),i0.ɵdid(16,671744,(null as any),0,i2.FormControlName,
          [[3,i2.ControlContainer],[8,(null as any)],[8,(null as any)],[2,i2.NG_VALUE_ACCESSOR]],
          {name:[0,'name']},(null as any)),i0.ɵprd(2048,(null as any),i2.NgControl,
          (null as any),[i2.FormControlName]),i0.ɵdid(18,16384,(null as any),0,i2.NgControlStatus,
          [i2.NgControl],(null as any),(null as any)),(_l()(),i0.ɵted(-1,(null as any),
          ['\n        '])),(_l()(),i0.ɵted(-1,(null as any),['\n        '])),(_l()(),
          i0.ɵeld(21,0,(null as any),(null as any),11,'div',[['class','form-group']],
              (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n            '])),(_l()(),i0.ɵeld(23,0,(null as any),
          (null as any),1,'label',[['for','email']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['Email'])),
      (_l()(),i0.ɵted(-1,(null as any),['\n            '])),(_l()(),i0.ɵeld(26,0,(null as any),
          (null as any),5,'input',[['class','form-control'],['formControlName','email'],
              ['id','email'],['type','email']],[[2,'ng-untouched',(null as any)],[2,
              'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',
              (null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],
              [2,'ng-pending',(null as any)]],[[(null as any),'input'],[(null as any),
              'blur'],[(null as any),'compositionstart'],[(null as any),'compositionend']],
          (_v,en,$event) => {
            var ad:boolean = true;
            if (('input' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,27)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i0.ɵnov(_v,27).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i0.ɵnov(_v,27)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i0.ɵnov(_v,27)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(27,16384,(null as any),0,i2.DefaultValueAccessor,
          [i0.Renderer2,i0.ElementRef,[2,i2.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i0.ɵprd(1024,(null as any),i2.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i2.DefaultValueAccessor]),i0.ɵdid(29,671744,(null as any),0,i2.FormControlName,
          [[3,i2.ControlContainer],[8,(null as any)],[8,(null as any)],[2,i2.NG_VALUE_ACCESSOR]],
          {name:[0,'name']},(null as any)),i0.ɵprd(2048,(null as any),i2.NgControl,
          (null as any),[i2.FormControlName]),i0.ɵdid(31,16384,(null as any),0,i2.NgControlStatus,
          [i2.NgControl],(null as any),(null as any)),(_l()(),i0.ɵted(-1,(null as any),
          ['\n        '])),(_l()(),i0.ɵted(-1,(null as any),['\n        '])),(_l()(),
          i0.ɵeld(34,0,(null as any),(null as any),11,'div',[['class','form-group']],
              (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n            '])),(_l()(),i0.ɵeld(36,0,(null as any),
          (null as any),1,'label',[['for','password']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),
          ['Passwoord'])),(_l()(),i0.ɵted(-1,(null as any),['\n            '])),(_l()(),
          i0.ɵeld(39,0,(null as any),(null as any),5,'input',[['class','form-control'],
              ['formControlName','password'],['id','password'],['type','password']],
              [[2,'ng-untouched',(null as any)],[2,'ng-touched',(null as any)],[2,
                  'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],[2,'ng-valid',
                  (null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',(null as any)]],
              [[(null as any),'input'],[(null as any),'blur'],[(null as any),'compositionstart'],
                  [(null as any),'compositionend']],(_v,en,$event) => {
                var ad:boolean = true;
                if (('input' === en)) {
                  const pd_0:any = ((<any>i0.ɵnov(_v,40)._handleInput($event.target.value)) !== false);
                  ad = (pd_0 && ad);
                }
                if (('blur' === en)) {
                  const pd_1:any = ((<any>i0.ɵnov(_v,40).onTouched()) !== false);
                  ad = (pd_1 && ad);
                }
                if (('compositionstart' === en)) {
                  const pd_2:any = ((<any>i0.ɵnov(_v,40)._compositionStart()) !== false);
                  ad = (pd_2 && ad);
                }
                if (('compositionend' === en)) {
                  const pd_3:any = ((<any>i0.ɵnov(_v,40)._compositionEnd($event.target.value)) !== false);
                  ad = (pd_3 && ad);
                }
                return ad;
              },(null as any),(null as any))),i0.ɵdid(40,16384,(null as any),0,i2.DefaultValueAccessor,
          [i0.Renderer2,i0.ElementRef,[2,i2.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i0.ɵprd(1024,(null as any),i2.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i2.DefaultValueAccessor]),i0.ɵdid(42,671744,(null as any),0,i2.FormControlName,
          [[3,i2.ControlContainer],[8,(null as any)],[8,(null as any)],[2,i2.NG_VALUE_ACCESSOR]],
          {name:[0,'name']},(null as any)),i0.ɵprd(2048,(null as any),i2.NgControl,
          (null as any),[i2.FormControlName]),i0.ɵdid(44,16384,(null as any),0,i2.NgControlStatus,
          [i2.NgControl],(null as any),(null as any)),(_l()(),i0.ɵted(-1,(null as any),
          ['\n        '])),(_l()(),i0.ɵted(-1,(null as any),['\n        '])),(_l()(),
          i0.ɵeld(47,0,(null as any),(null as any),1,'button',[['class','btn btn-primary'],
              ['type','submit']],[[8,'disabled',0]],(null as any),(null as any),(null as any),
              (null as any))),(_l()(),i0.ɵted(-1,(null as any),['Submit'])),(_l()(),
          i0.ɵted(-1,(null as any),['\n    '])),(_l()(),i0.ɵted(-1,(null as any),['\n']))],
      (_ck,_v) => {
        var _co:i1.SignupComponent = _v.component;
        const currVal_7:any = _co.myForm;
        _ck(_v,4,0,currVal_7);
        const currVal_15:any = 'username';
        _ck(_v,16,0,currVal_15);
        const currVal_23:any = 'email';
        _ck(_v,29,0,currVal_23);
        const currVal_31:any = 'password';
        _ck(_v,42,0,currVal_31);
      },(_ck,_v) => {
        var _co:i1.SignupComponent = _v.component;
        const currVal_0:any = i0.ɵnov(_v,6).ngClassUntouched;
        const currVal_1:any = i0.ɵnov(_v,6).ngClassTouched;
        const currVal_2:any = i0.ɵnov(_v,6).ngClassPristine;
        const currVal_3:any = i0.ɵnov(_v,6).ngClassDirty;
        const currVal_4:any = i0.ɵnov(_v,6).ngClassValid;
        const currVal_5:any = i0.ɵnov(_v,6).ngClassInvalid;
        const currVal_6:any = i0.ɵnov(_v,6).ngClassPending;
        _ck(_v,2,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
        const currVal_8:any = i0.ɵnov(_v,18).ngClassUntouched;
        const currVal_9:any = i0.ɵnov(_v,18).ngClassTouched;
        const currVal_10:any = i0.ɵnov(_v,18).ngClassPristine;
        const currVal_11:any = i0.ɵnov(_v,18).ngClassDirty;
        const currVal_12:any = i0.ɵnov(_v,18).ngClassValid;
        const currVal_13:any = i0.ɵnov(_v,18).ngClassInvalid;
        const currVal_14:any = i0.ɵnov(_v,18).ngClassPending;
        _ck(_v,13,0,currVal_8,currVal_9,currVal_10,currVal_11,currVal_12,currVal_13,
            currVal_14);
        const currVal_16:any = i0.ɵnov(_v,31).ngClassUntouched;
        const currVal_17:any = i0.ɵnov(_v,31).ngClassTouched;
        const currVal_18:any = i0.ɵnov(_v,31).ngClassPristine;
        const currVal_19:any = i0.ɵnov(_v,31).ngClassDirty;
        const currVal_20:any = i0.ɵnov(_v,31).ngClassValid;
        const currVal_21:any = i0.ɵnov(_v,31).ngClassInvalid;
        const currVal_22:any = i0.ɵnov(_v,31).ngClassPending;
        _ck(_v,26,0,currVal_16,currVal_17,currVal_18,currVal_19,currVal_20,currVal_21,
            currVal_22);
        const currVal_24:any = i0.ɵnov(_v,44).ngClassUntouched;
        const currVal_25:any = i0.ɵnov(_v,44).ngClassTouched;
        const currVal_26:any = i0.ɵnov(_v,44).ngClassPristine;
        const currVal_27:any = i0.ɵnov(_v,44).ngClassDirty;
        const currVal_28:any = i0.ɵnov(_v,44).ngClassValid;
        const currVal_29:any = i0.ɵnov(_v,44).ngClassInvalid;
        const currVal_30:any = i0.ɵnov(_v,44).ngClassPending;
        _ck(_v,39,0,currVal_24,currVal_25,currVal_26,currVal_27,currVal_28,currVal_29,
            currVal_30);
        const currVal_32:boolean = !_co.myForm.valid;
        _ck(_v,47,0,currVal_32);
      });
}
export function View_SignupComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'app-signup',
      ([] as any[]),(null as any),(null as any),(null as any),View_SignupComponent_0,
      RenderType_SignupComponent)),i0.ɵdid(1,114688,(null as any),0,i1.SignupComponent,
      [i3.AuthService],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const SignupComponentNgFactory:i0.ComponentFactory<i1.SignupComponent> = i0.ɵccf('app-signup',
    i1.SignupComponent,View_SignupComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvcm9ieWQvRG9jdW1lbnRzL1NjaG9vbC9EaXRKYWFyL01FQU4vUFJPSkVDVC9hc3NldHMvYXBwL2F1dGgvc2lnbnVwLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy9yb2J5ZC9Eb2N1bWVudHMvU2Nob29sL0RpdEphYXIvTUVBTi9QUk9KRUNUL2Fzc2V0cy9hcHAvYXV0aC9zaWdudXAuY29tcG9uZW50LnRzIiwibmc6Ly8vQzovVXNlcnMvcm9ieWQvRG9jdW1lbnRzL1NjaG9vbC9EaXRKYWFyL01FQU4vUFJPSkVDVC9hc3NldHMvYXBwL2F1dGgvc2lnbnVwLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvcm9ieWQvRG9jdW1lbnRzL1NjaG9vbC9EaXRKYWFyL01FQU4vUFJPSkVDVC9hc3NldHMvYXBwL2F1dGgvc2lnbnVwLmNvbXBvbmVudC50cy5TaWdudXBDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XHJcbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cIm15Rm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInVzZXJuYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBmb3JtQ29udHJvbE5hbWU9XCJ1c2VybmFtZVwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGZvcm1Db250cm9sTmFtZT1cImVtYWlsXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvb3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPVwiIW15Rm9ybS52YWxpZFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG48L2Rpdj4iLCI8YXBwLXNpZ251cD48L2FwcC1zaWdudXA+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztvQkNBQTtNQUFBO01BQUEsZ0JBQXNDLDhDQUNsQztNQUFBO1VBQUE7VUFBQTtjQUFBO1VBQUE7UUFBQTtRQUFBO1FBQUE7VUFBQTtVQUFBO1FBQUE7UUFBQTtVQUFBO1VBQUE7UUFBQTtRQUEyQjtVQUFBO1VBQUE7UUFBQTtRQUEzQjtNQUFBLHVDQUFBO01BQUEsb0NBQUE7TUFBQTthQUFBO2FBQUE7VUFBQSw2QkFBbUQ7TUFDL0M7VUFBQTtNQUF3QixzREFDcEI7VUFBQTtVQUFBLDRDQUFzQjtVQUFBLGVBQWdCLHNEQUN0QztpQkFBQTtjQUFBO2NBQUE7Y0FBQTtjQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtVQUFBLHVDQUFBO1VBQUE7VUFBQSxzQkFBQTtRQUFBO01BQUEsb0NBQUE7VUFBQTtVQUFBLHdDQUFBO1VBQUEsMkNBQUE7VUFBQSw0Q0FBaUY7VUFBQSxpQkFDL0Usa0RBQ047aUJBQUE7Y0FBQTtNQUF3QixzREFDcEI7VUFBQTtVQUFBLDhCQUFtQjtNQUFhLHNEQUNoQztVQUFBO2NBQUE7Y0FBQTtjQUFBO2NBQUE7Y0FBQTtVQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO1VBQUEsdUNBQUE7VUFBQTtVQUFBLHNCQUFBO1FBQUE7TUFBQSxvQ0FBQTtVQUFBO1VBQUEsd0NBQUE7VUFBQSwyQ0FBQTtVQUFBLDRDQUE0RTtVQUFBLGlCQUMxRSxrREFDTjtpQkFBQTtjQUFBO01BQXdCLHNEQUNwQjtVQUFBO1VBQUEsNENBQXNCO1VBQUEsZ0JBQWlCLHNEQUN2QztpQkFBQTtjQUFBO2NBQUE7a0JBQUE7a0JBQUE7Y0FBQTtrQkFBQTtnQkFBQTtnQkFBQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQTtjQUFBLHVDQUFBO1VBQUE7VUFBQSxzQkFBQTtRQUFBO01BQUEsb0NBQUE7VUFBQTtVQUFBLHdDQUFBO1VBQUEsMkNBQUE7VUFBQSw0Q0FBcUY7VUFBQSxpQkFDbkYsa0RBQ047aUJBQUE7Y0FBQTtjQUFBLGdCQUF5RSw4Q0FBZTtpQkFBQSwrQkFDckY7OztRQWREO1FBQU4sV0FBTSxTQUFOO1FBRzhEO1FBQXRELFlBQXNELFVBQXREO1FBSW9EO1FBQXBELFlBQW9ELFVBQXBEO1FBSTBEO1FBQTFELFlBQTBELFVBQTFEOzs7UUFYUjtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBLFdBQUEscUVBQUE7UUFHUTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBLFlBQUE7WUFBQSxVQUFBO1FBSUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQSxZQUFBO1lBQUEsVUFBQTtRQUlBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUEsWUFBQTtZQUFBLFVBQUE7UUFFMEM7UUFBOUMsWUFBOEMsVUFBOUM7Ozs7b0JDZFI7TUFBQTtnQ0FBQSxVQUFBO01BQUE7SUFBQTs7OzsifQ==

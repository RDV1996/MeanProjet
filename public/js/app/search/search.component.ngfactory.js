/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from './search.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from './search.component';
import * as i3 from '@angular/forms';
import * as i4 from '../post/postList.component.ngfactory';
import * as i5 from '../post/postList.component';
import * as i6 from '@angular/platform-browser';
import * as i7 from '@angular/router';
import * as i8 from '../service/post.service';
import * as i9 from '../service/auth.service';
import * as i10 from '../service/pagina.service';
var styles_SearchComponent = [i0.styles];
export var RenderType_SearchComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_SearchComponent, data: {} });
export function View_SearchComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 45, 'div', [['class',
                'container-full']], null, null, null, null, null)),
        (_l()(), i1.ɵted(-1, null, ['\n    '])), (_l()(), i1.ɵeld(2, 0, null, null, 21, 'div', [['class', 'row']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n        '])),
        (_l()(), i1.ɵeld(4, 0, null, null, 18, 'div', [['class', 'col-md-12']], null, null, null, null, null)),
        (_l()(), i1.ɵted(-1, null, ['\n            '])), (_l()(), i1.ɵeld(6, 0, null, null, 15, 'form', [['novalidate', '']], [[2, 'ng-untouched', null],
            [2, 'ng-touched', null], [2, 'ng-pristine', null], [2, 'ng-dirty',
                null], [2, 'ng-valid', null], [2, 'ng-invalid', null],
            [2, 'ng-pending', null]], [[null, 'ngSubmit'], [null,
                'submit'], [null, 'reset']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('submit' === en)) {
                var pd_0 = (i1.ɵnov(_v, 8).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                var pd_1 = (i1.ɵnov(_v, 8).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (('ngSubmit' === en)) {
                var pd_2 = (_co.onSubmit() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(7, 16384, null, 0, i3.ɵbf, [], null, null), i1.ɵdid(8, 540672, null, 0, i3.FormGroupDirective, [[8, null], [8, null]], { form: [0, 'form'] }, { ngSubmit: 'ngSubmit' }),
        i1.ɵprd(2048, null, i3.ControlContainer, null, [i3.FormGroupDirective]),
        i1.ɵdid(10, 16384, null, 0, i3.NgControlStatusGroup, [i3.ControlContainer], null, null), (_l()(), i1.ɵted(-1, null, ['\n            '])),
        (_l()(), i1.ɵeld(12, 0, null, null, 5, 'input', [['autocomplete',
                'off'], ['class', 'form-control'], ['formControlName', 'search'], ['id', 'search'],
            ['placeholder', 'Search posts...']], [[2, 'ng-untouched', null], [2,
                'ng-touched', null], [2, 'ng-pristine', null], [2, 'ng-dirty',
                null], [2, 'ng-valid', null], [2, 'ng-invalid', null],
            [2, 'ng-pending', null]], [[null, 'input'], [null,
                'blur'], [null, 'compositionstart'], [null, 'compositionend']], function (_v, en, $event) {
            var ad = true;
            if (('input' === en)) {
                var pd_0 = (i1.ɵnov(_v, 13)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i1.ɵnov(_v, 13).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i1.ɵnov(_v, 13)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i1.ɵnov(_v, 13)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(13, 16384, null, 0, i3.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i3.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i3.DefaultValueAccessor]), i1.ɵdid(15, 671744, null, 0, i3.FormControlName, [[3, i3.ControlContainer], [8, null], [8, null], [2, i3.NG_VALUE_ACCESSOR]], { name: [0, 'name'] }, null), i1.ɵprd(2048, null, i3.NgControl, null, [i3.FormControlName]), i1.ɵdid(17, 16384, null, 0, i3.NgControlStatus, [i3.NgControl], null, null), (_l()(), i1.ɵted(-1, null, ['\n            '])), (_l()(), i1.ɵeld(19, 0, null, null, 1, 'button', [['class', 'btn btn-primary'], ['content', 'Search'], ['type', 'submit']], null, null, null, null, null)),
        (_l()(), i1.ɵted(-1, null, ['Search'])), (_l()(), i1.ɵted(-1, null, ['\n        '])), (_l()(), i1.ɵted(-1, null, ['\n        '])), (_l()(),
            i1.ɵted(-1, null, ['\n    '])), (_l()(), i1.ɵted(-1, null, ['\n    '])),
        (_l()(), i1.ɵeld(25, 0, null, null, 19, 'div', [['class', 'col-xs-10']], null, null, null, null, null)),
        (_l()(), i1.ɵted(-1, null, ['\n        '])), (_l()(), i1.ɵeld(27, 0, null, null, 4, 'div', [['class', 'row']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n            '])),
        (_l()(), i1.ɵeld(29, 0, null, null, 1, 'app-postList', [], null, null, null, i4.View_PostListComponent_0, i4.RenderType_PostListComponent)),
        i1.ɵdid(30, 49152, null, 0, i5.PostListComponent, [i6.DomSanitizer, i7.Router,
            i8.PostService], { posts: [0, 'posts'] }, null), (_l()(), i1.ɵted(-1, null, ['\n        '])), (_l()(), i1.ɵted(-1, null, ['\n        '])), (_l()(),
            i1.ɵeld(33, 0, null, null, 10, 'div', [['class', 'row']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n            '])), (_l()(), i1.ɵeld(35, 0, null, null, 7, 'form', [['novalidate', '']], [[2, 'ng-untouched', null], [2, 'ng-touched',
                null], [2, 'ng-pristine', null], [2, 'ng-dirty', null],
            [2, 'ng-valid', null], [2, 'ng-invalid', null], [2, 'ng-pending',
                null]], [[null, 'submit'], [null, 'reset']], function (_v, en, $event) {
            var ad = true;
            if (('submit' === en)) {
                var pd_0 = (i1.ɵnov(_v, 37).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                var pd_1 = (i1.ɵnov(_v, 37).onReset() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(36, 16384, null, 0, i3.ɵbf, [], null, null), i1.ɵdid(37, 16384, null, 0, i3.NgForm, [[8, null], [8, null]], null, null),
        i1.ɵprd(2048, null, i3.ControlContainer, null, [i3.NgForm]), i1.ɵdid(39, 16384, null, 0, i3.NgControlStatusGroup, [i3.ControlContainer], null, null), (_l()(), i1.ɵted(-1, null, ['\n                '])),
        (_l()(), i1.ɵeld(41, 0, null, null, 0, 'input', [['class', 'form-controlcol-xs-4'],
            ['min', '1'], ['placeholder', 'Page'], ['required', ''], ['type', 'number']], [[8,
                'max', 0], [8, 'value', 0]], null, null, null, null)),
        (_l()(), i1.ɵted(-1, null, ['\n            '])), (_l()(), i1.ɵted(-1, null, ['\n        '])), (_l()(), i1.ɵted(-1, null, ['\n    '])), (_l()(), i1.ɵted(-1, null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = _co.myForm;
        _ck(_v, 8, 0, currVal_7);
        var currVal_15 = 'search';
        _ck(_v, 15, 0, currVal_15);
        var currVal_16 = _co.posts;
        _ck(_v, 30, 0, currVal_16);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = i1.ɵnov(_v, 10).ngClassUntouched;
        var currVal_1 = i1.ɵnov(_v, 10).ngClassTouched;
        var currVal_2 = i1.ɵnov(_v, 10).ngClassPristine;
        var currVal_3 = i1.ɵnov(_v, 10).ngClassDirty;
        var currVal_4 = i1.ɵnov(_v, 10).ngClassValid;
        var currVal_5 = i1.ɵnov(_v, 10).ngClassInvalid;
        var currVal_6 = i1.ɵnov(_v, 10).ngClassPending;
        _ck(_v, 6, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_8 = i1.ɵnov(_v, 17).ngClassUntouched;
        var currVal_9 = i1.ɵnov(_v, 17).ngClassTouched;
        var currVal_10 = i1.ɵnov(_v, 17).ngClassPristine;
        var currVal_11 = i1.ɵnov(_v, 17).ngClassDirty;
        var currVal_12 = i1.ɵnov(_v, 17).ngClassValid;
        var currVal_13 = i1.ɵnov(_v, 17).ngClassInvalid;
        var currVal_14 = i1.ɵnov(_v, 17).ngClassPending;
        _ck(_v, 12, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);
        var currVal_17 = i1.ɵnov(_v, 39).ngClassUntouched;
        var currVal_18 = i1.ɵnov(_v, 39).ngClassTouched;
        var currVal_19 = i1.ɵnov(_v, 39).ngClassPristine;
        var currVal_20 = i1.ɵnov(_v, 39).ngClassDirty;
        var currVal_21 = i1.ɵnov(_v, 39).ngClassValid;
        var currVal_22 = i1.ɵnov(_v, 39).ngClassInvalid;
        var currVal_23 = i1.ɵnov(_v, 39).ngClassPending;
        _ck(_v, 35, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23);
        var currVal_24 = i1.ɵinlineInterpolate(1, '', _co.maxpages, '');
        var currVal_25 = i1.ɵinlineInterpolate(1, '', _co.pagina, '');
        _ck(_v, 41, 0, currVal_24, currVal_25);
    });
}
export function View_SearchComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, 'app-search', [], null, null, null, View_SearchComponent_0, RenderType_SearchComponent)), i1.ɵdid(1, 114688, null, 0, i2.SearchComponent, [i6.DomSanitizer, i7.ActivatedRoute, i9.AuthService, i10.PaginaService, i8.PostService], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
export var SearchComponentNgFactory = i1.ɵccf('app-search', i2.SearchComponent, View_SearchComponent_Host_0, {}, {}, []);

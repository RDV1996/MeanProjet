/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from './app.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from './navbar/navbar.component.ngfactory';
import * as i3 from './navbar/navbar.component';
import * as i4 from './service/auth.service';
import * as i5 from '@angular/router';
import * as i6 from './service/pagina.service';
import * as i7 from './errors/error.component.ngfactory';
import * as i8 from './errors/error.component';
import * as i9 from './errors/error.service';
import * as i10 from './app.component';
var styles_AppComponent = [i0.styles];
export var RenderType_AppComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_AppComponent,
    data: {} });
export function View_AppComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵted(-1, null, ['    '])), (_l()(), i1.ɵeld(1, 0, null, null, 1, 'app-navbar', [], null, null, null, i2.View_NavbarComponent_0, i2.RenderType_NavbarComponent)), i1.ɵdid(2, 49152, null, 0, i3.NavbarComponent, [i4.AuthService, i5.Router, i6.PaginaService], null, null), (_l()(), i1.ɵted(-1, null, ['\n    '])), (_l()(),
            i1.ɵeld(4, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
        i1.ɵdid(5, 212992, null, 0, i5.RouterOutlet, [i5.ChildrenOutletContexts,
            i1.ViewContainerRef, i1.ComponentFactoryResolver, [8, null], i1.ChangeDetectorRef], null, null), (_l()(), i1.ɵted(-1, null, ['\n    '])),
        (_l()(), i1.ɵeld(7, 0, null, null, 1, 'app-error', [], null, null, null, i7.View_ErrorComponent_0, i7.RenderType_ErrorComponent)),
        i1.ɵdid(8, 114688, null, 0, i8.ErrorComponent, [i9.ErrorService], null, null), (_l()(), i1.ɵted(-1, null, ['\n']))], function (_ck, _v) {
        _ck(_v, 5, 0);
        _ck(_v, 8, 0);
    }, null);
}
export function View_AppComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, 'my-app', [], null, null, null, View_AppComponent_0, RenderType_AppComponent)),
        i1.ɵdid(1, 49152, null, 0, i10.AppComponent, [], null, null)], null, null);
}
export var AppComponentNgFactory = i1.ɵccf('my-app', i10.AppComponent, View_AppComponent_Host_0, {}, {}, []);

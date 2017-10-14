import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ProductComponent } from "../product/product.component";

@Injectable()
export class UnsavedGuard implements CanDeactivate<ProductComponent> {

  canDeactivate(component: ProductComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return window.confirm("确认离开");
  }
}

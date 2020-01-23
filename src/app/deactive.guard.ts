import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
export interface canComponentDeactivate{
  confirm1():boolean;

  }


@Injectable({
  providedIn: 'root'
})
export class DeactiveGuard implements CanDeactivate<canComponentDeactivate> {
  canDeactivate(
    component: canComponentDeactivate,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
return component.confirm1();
      }
}

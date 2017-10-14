import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable()
export class LoginGuard implements CanActivate {
  canActivate() {

    let loggedIn: boolean = Math.random() < 0.5;

    if (!loggedIn) {
      console.info('用户未登录');
    }
    return loggedIn;
  }
}

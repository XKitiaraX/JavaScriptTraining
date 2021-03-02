import { Injectable } from '@angular/core';
import {CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authService.verificaAutenticacion()
      .pipe(
        tap( estaAutenticado => {
          if (!estaAutenticado) {
            this.router.navigate(['./auth/login'])
          }
        })
      );

    // let can: boolean = false;
    //
    // if (this.authService.auth.id) {
    //   can = true;
    // } else {
    //   console.log('Bloqueado por el AuthGuard - CanActivate')
    // }
    //
    // return can;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean  {

    return this.authService.verificaAutenticacion()
      .pipe(
        tap( estaAutenticado => {
          if (!estaAutenticado) {
            this.router.navigate(['./auth/login'])
          }
        })
      );

    // let can: boolean = false;
    //
    // if (this.authService.auth.id) {
    //   can = true;
    // } else {
    //   console.log('Bloqueado por el AuthGuard - CanLoad')
    // }
    //
    // return can;
  }
}

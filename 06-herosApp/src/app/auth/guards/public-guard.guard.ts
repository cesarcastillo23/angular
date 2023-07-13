import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';


const checkAuthStatus = (): boolean | Observable<boolean> => {
  //se inyectan el AuthService y el Router
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.checkAuthentication()
  .pipe(
    tap( isAuthenticated => console.log('Authenticated:', isAuthenticated ) ),
    tap( isAuthenticated => {
      if ( isAuthenticated ) {
        router.navigate(['./heroes'])
      }
    }),
    map(isAuthenticated => !isAuthenticated)

  )
}

export const publicActivateGuard: CanActivateFn = (route: ActivatedRouteSnapshot,state: RouterStateSnapshot) => {
  // console.log('CanActivate');
  // console.log({ route, state });

    return checkAuthStatus();
  //return false
}

// export const publicMachGuard:CanMatchFn=
// ( route: Route, segments: UrlSegment[]) => {
//   // console.log('CanMatch');
//   // console.log({ route, segments });

//    return checkAuthStatus();
// //return false
// };


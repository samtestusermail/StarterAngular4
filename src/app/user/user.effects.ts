/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { UserActions } from './user.actions';
import { AppState } from '../reducers';
import { UserService } from './user.service';

@Injectable()

export class UserEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private userService: UserService,
    private userActions: UserActions
  ) { }

  @Effect() logout$ = this.actions$
    .ofType(UserActions.LOGOUT)
    .map(action => action.payload)
    .switchMap(() => 
       this.userService.logout()
      .mergeMap((res: any) => Observable.of(
        this.userActions.logoutSuccess(res)
        )
      )
      .catch((err) => Observable.of(
        this.userActions.logoutFail(err)
      ))
    );
    @Effect() editCount$ = this.actions$
    .ofType(UserActions.EDIT_COUNT)
    .map(action => action.payload)
    .switchMap(payload => {
      debugger;
      console.log('the payload was: ' + payload.myCount);
      
      return Observable.of({type: "PAYLOAD_EFFECT_RESPONDS", payload: {myCount: payload.myCount}})
    });
    //.switchMap((a) => 
    // { 
    //   new Observable(observer => {
    //   observer.next(42);
    //   observer.complete();
    //   })
    // }
        // {
        //    debugger;
        //    this.userService.editCountProcessed(a.myCount) 
        // }
        // .mergeMap((res: any) => Observable.of(
        //   this.userActions.editCountProcessed(res)
        //   )
        // )
        // .catch((err) => Observable.of(
        //   this.userActions.logoutFail(err)
        // ))
    //);
    
}
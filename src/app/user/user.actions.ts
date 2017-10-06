/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Action } from '@ngrx/store';

import { User } from './user.model';

@Injectable()

export class UserActions {

  static EDIT_USER = '[User] Edit User';
  editUser(user: User): Action {
    return {
      type: UserActions.EDIT_USER,
      payload: user
    };
  }

  static LOGOUT = '[User] Logout';
  logout(): Action {
    debugger;
    return {
      type: UserActions.LOGOUT
    };
  }

  static LOGOUT_FAIL = '[User] Logout Fail';
  logoutFail(err: Error): Action {
    //debugger;
    return {
      type: UserActions.LOGOUT_FAIL,
      payload: err
    };
  }

  static LOGOUT_SUCCESS = '[User] Logout Success';
  logoutSuccess(res: Response): Action {
    return {
      type: UserActions.LOGOUT_SUCCESS,
      payload: res
    };
  }

  static EDIT_COUNT = 'Edit count';
  editCount(res: number): Action {
    return {
      type: UserActions.EDIT_COUNT,
      payload: res
    }
  }

  static EDIT_COUNT_PROCESSED = 'Edit count';
  editCountProcessed(res: number): Action {
    return {
      type: UserActions.EDIT_COUNT_PROCESSED,
      payload: res
    }
  }
}

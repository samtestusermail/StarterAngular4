/* tslint:disable: no-switch-case-fall-through */
import { Action } from '@ngrx/store';

import { UserActions } from './user.actions';
import { User } from './user.model';

export interface UserState {
  user: User;
  loading: boolean;
  loaded: boolean;
  logoutSuccess: boolean,
  myCount: number
}

export const initialState: UserState = {
  user: { name: 'Angular User222', num : 5  },
  loading: false,
  loaded: true,
  logoutSuccess: null,
  myCount: 10
};

export function userReducer(state = initialState, action: Action): UserState {
  debugger;
  switch (action.type) {
   
    case UserActions.EDIT_USER: {
      return {
        ...state,
        user: action.payload
      };
    }
    case UserActions.LOGOUT_FAIL : {
      return {
        ...state,
        logoutSuccess: action.payload
      };
    }

    case UserActions.EDIT_COUNT : {
      return {
        ...state,
        myCount: action.payload
      };
    }

    case "PAYLOAD_EFFECT_RESPONDS": {
      return {
        ...state,
         myCount: action.payload.myCount
      };
    }

    default: {
      return state;
    }
  }
}
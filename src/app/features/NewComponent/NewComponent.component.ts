import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { TransferHttp } from '../../../modules/transfer-http/transfer-http';

import { AppState } from '../../reducers';
import { Store } from '@ngrx/store';
import { UserActions } from '../../user/user.actions';
import { User } from '../../user/user.model';

@Component({
  selector: 'my-newcomponent',
  templateUrl: './NewComponent.component.html',
})

export class NewComponentComponent implements OnDestroy, OnInit {
     myCount: number = 10;
     myCount$: Observable<number>;
     destroyed$: Subject<any> = new Subject<any>();
//   form: FormGroup;
//   nameLabel = 'Enter your name';
//   testSub$: Observable<string>;
     user: User;
     user$: Observable<User>;
  constructor(
    // private fb: FormBuilder,
    // private http: TransferHttp,
     private store: Store<AppState>,
     private userActions: UserActions,
  ) {
    debugger;
    this.myCount$ = this.store.select(state => state.user.myCount);
    this.myCount$.takeUntil(this.destroyed$)
      .subscribe(user => { this.myCount = user; });
  }
  countChange(event) {
      debugger;
      //this.myCount = event;
      this.store.dispatch(this.userActions.editCount(
        //Object.assign({}, this.myCount, { myCount: event }
        //Object.assign({}, this.user.num, { myCount: event }
        Object.assign({}, this.myCount, { myCount: event }
     )));

  }
  ngOnInit() {
    // this.form.get('name').setValue(this.user.name);
    // if (UNIVERSAL) {
    //   this.testSub$ = this.http.get('http://localhost:8000/data').map(data => {
    //     return `${data.greeting} ${data.name}`;
    //   });
    // }
  }

//   clearName() {

//     this.store.dispatch(this.userActions.editUser(
//       Object.assign({}, this.user, { name: '' }
//       )));

//     this.form.get('name').setValue('');
//   }

//   logout() {
//     this.store.dispatch(this.userActions.logout());
//   }

//   submitState() {
//     this.store.dispatch(this.userActions.editUser(
//       Object.assign({}, this.user, { name: this.form.get('name').value }
//       )));
//   }

  ngOnDestroy() {
    //this.destroyed$.next();
  }
}


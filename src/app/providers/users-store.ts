import {Injectable} from 'angular2/core';
import * as _ from 'lodash';

import {User} from '../models/user';

@Injectable()
export class UsersStore {
  users: User[] = [];

  constructor() {
    this.users = [
      new User({id: 1, email: 't.bak@selleo.com', password: 'secret'}),
      new User({id: 2, email: 'max@example.com', password: 'secret'})
    ];
  }

  getList(): User[] {
    return this.users;
  }

  getOne(id: number): User {
    return _.find(this.users, {id});
  }

  update(user: User): User {
    let index = _.findIndex(this.users, {id: user.id});
    this.users.splice(index, 1, user);
    return user;
  }
}

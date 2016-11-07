import { User } from './User';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  constructor() { 
  }

  getUsers():User[]{
    return [{name:"Omar"},{name:"Jon"}]
  }

}

import { User } from './User';
import { UsersService } from './users.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UsersService]
})
export class AppComponent {
  title = 'app works!';
  users:User[] = [];
  constructor(private usersService:UsersService) {
    this.users = this.usersService.getUsers();
  }
}

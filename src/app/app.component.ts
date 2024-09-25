import { UsersList } from './data/users-list';
import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { filterUsersList } from './utils/filter-users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  usersList: IUser[] = [];
  usersListFiltered: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false

  onUserSelected(user: IUser) {
    this.showUserDetails = true
    this.userSelected = user
  }

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList
      this.usersListFiltered = UsersList
    }, 3000)
  }

  onFilter(filterOptions: IFilterOptions) {
    this.usersListFiltered = filterUsersList(filterOptions, this.usersList)
  }

}

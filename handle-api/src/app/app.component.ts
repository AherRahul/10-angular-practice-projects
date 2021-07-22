import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { UserApiService } from './services/user-api.service';
import { User } from './utils/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'handle-api';
  user: any;
  loader = true;

  constructor (
    private toastr: ToastrService,
    private userApiService: UserApiService
  ) {}

  ngOnInit() {
    this.fetchUserData();
  }

  fetchUserData() {
    this.userApiService.getUser().subscribe(
      (user: any) => {
        this.user = user.results[0];
        this.loader = false
    }, (err) => {
      this.toastr.error(err.status + " Error occured while fetching the user..!!");
      console.log(err);
    });
  }

  reloadUser() {
    this.user = null;
    this.loader = true;
    this.fetchUserData();
  }
}

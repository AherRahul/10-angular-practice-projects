import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email = null;

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) {
    authService.getUser().subscribe((user: any) => {
      this.email = user.email;
    })
  }

  ngOnInit() {
  }

  async handleSignOut() {
    try {
      const res = await this.authService.signOut();
      this.router.navigateByUrl('/signin');
      this.toastrService.info("Login again to continue..!!");
    } catch (error) {
      this.toastrService.error("Something is wrong..!!");
    }
  }

}

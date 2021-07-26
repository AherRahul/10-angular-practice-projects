import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(    
    private toastrService: ToastrService,
    private authService: AuthService,
    private router: Router,
    private toaster: ToastrService,
    private ref: ChangeDetectorRef,
  ) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    const {email, password} = f.form.value;

    //TODO: do your checking here

    this.authService.signIn(email, password).then(
      (res) => {
        this.router.navigateByUrl('/');
        this.toaster.success("Sign in success..!!");
      }
    ).catch(
      (err) => {
        console.log(err.message);
        this.toaster.error("Sign in failed..!!");
    });
  }

}

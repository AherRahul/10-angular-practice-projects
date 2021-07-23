import { ChangeDetectorRef, Component, Input, OnChanges, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GitHubService } from 'src/app/services/git-hub.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit, OnChanges {

  @Input() repoUrl: string;
  repos = [];

  constructor(
    private githubService: GitHubService,
    private ref: ChangeDetectorRef,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.repoUrl) {
      this.githubService.getRepos(this.repoUrl).subscribe((repos: []) => {
        this.repos = repos;

        this.ref.detectChanges();
      }, (err) => {
        console.log(err);
        this.toastr.error("Something went wrong while fetching the repos..!!");
      })
    }
  }
}

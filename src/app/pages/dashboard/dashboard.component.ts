import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Dashboard } from 'src/app/core/interfaces/dashboard';
import { DashboardService } from 'src/app/core/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  data: Dashboard[] = [];

  constructor(
    private router: Router,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.dashboardService.getPosts().subscribe({
      next: (posts) => {
        this.data = posts;
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
  }

  openPostTab(id: any){
    this.router.navigate(['home/posts/'+id])
  }

}

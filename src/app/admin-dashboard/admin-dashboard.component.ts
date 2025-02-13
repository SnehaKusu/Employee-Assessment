import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  imports: [CommonModule]
})
export class AdminDashboardComponent implements OnInit {
  assessments: any[] = [];
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAssessments();
  }

  fetchAssessments(): void {
    this.http.get<any[]>('http://localhost:5000/get-assessments')
      .subscribe({
        next: (response) => {
          console.log("📥 Received data from backend:", response);
          this.assessments = response;
        },
        error: (error) => {
          console.error("❌ Error fetching assessments:", error);
          this.errorMessage = "❌ Failed to fetch data. Try again.";
        }
      });
  }
}

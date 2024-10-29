import { Component } from '@angular/core';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.css']
})
export class OrderDashboardComponent {
  orders: string[] = [];
  workdayStarted: boolean = false;

  startWorkday() {
    this.workdayStarted = true;
    // Add logic to start workday
  }

  endWorkday() {
    this.workdayStarted = false;
    // Add logic to end workday
  }
}

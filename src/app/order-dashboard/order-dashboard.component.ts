import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.css']
})
export class OrderDashboardComponent implements OnDestroy {
  orders: number[] = [];
  workdayStarted: boolean = false;
  private orderNumber: number = 1;
  private orderInterval: any;

  startWorkday() {
    this.workdayStarted = true;
    this.orderInterval = setInterval(() => {
      this.orders.push(this.orderNumber++);
    }, 2000);
  }

  endWorkday() {
    this.workdayStarted = false;
    clearInterval(this.orderInterval);
  }

  ngOnDestroy() {
    clearInterval(this.orderInterval);
  }
}

import { Component, OnDestroy, OnInit } from "@angular/core";
import { ClientMaintenanceDataService } from "./client-maintenance-data.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-client-maintenance",
  templateUrl: "./client-maintenance.component.html",
  styleUrls: ["./client-maintenance.component.css"]
})
export class ClientMaintenanceComponent implements OnInit, OnDestroy {
  public clientKey: number = -1;
  private subscription: Subscription;
  constructor(
    private clientMaintenanceDataService: ClientMaintenanceDataService
  ) {
    this.subscription = this.clientMaintenanceDataService.clientSelected$.subscribe(
      clientKey => {
        this.clientKey = clientKey;
        console.log(`${this.clientKey} selected from client search.`);
      }
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ClientMaintenanceDataService } from "../client-maintenance-data.service";

@Component({
  selector: "app-client-phone",
  templateUrl: "./client-phone.component.html",
  styleUrls: ["./client-phone.component.css"]
})
export class ClientPhoneComponent implements OnInit, OnDestroy {
  public clientKey: number = -1;
  private subscription: Subscription;

  constructor(
    private clientMaintenanceDataService: ClientMaintenanceDataService
  ) {
    this.subscription = this.clientMaintenanceDataService.clientSelected$.subscribe(clientKey => {
      this.clientKey = clientKey;
      console.log(`Phone - ${this.clientKey} selected from client search.`);
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ClientMaintenanceDataService } from "../client-maintenance-data.service";

@Component({
  selector: "app-client-demographics",
  templateUrl: "./client-demographics.component.html",
  styleUrls: ["./client-demographics.component.css"]
})
export class ClientDemographicsComponent implements OnInit, OnDestroy {
  public clientKey: number = -1;

  private subscription: Subscription;

  constructor(
    private clientMaintenanceDataService: ClientMaintenanceDataService
  ) {
    this.subscription = this.clientMaintenanceDataService.clientSelected$.subscribe(
      client => {
        this.clientKey = client;
        console.log(
          `Client Demographics - ${this.clientKey} selected from client search.`
        );
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

import { Component, OnDestroy,  OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ClientMaintenanceDataService } from "../client-maintenance-data.service";

@Component({
  selector: "app-client-breadcrumb",
  templateUrl: "./client-breadcrumb.component.html",
  styleUrls: ["./client-breadcrumb.component.css"]
})
export class ClientBreadcrumbComponent implements OnInit, OnDestroy {
  public clientKey: number = -1;
  private subscription: Subscription;

  constructor(
    private clientMaintenanceDataService: ClientMaintenanceDataService
  ) {
    this.subscription = this.clientMaintenanceDataService.clientSelected$.subscribe(clientKey => {
      this.clientKey = clientKey;
      console.log(
        `Breadcrumb - ${this.clientKey} selected from client search.`
      );
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ClientMaintenanceDataService } from "../client-maintenance-data.service";

@Component({
  selector: "app-client-search",
  templateUrl: "./client-search.component.html",
  styleUrls: ["./client-search.component.css"]
})
export class ClientSearchComponent implements OnInit, OnDestroy {
  public clientKey: number = null;

  subscription: Subscription;

  constructor(
    private clientMaintenanceDataService: ClientMaintenanceDataService,
    private router: Router
  ) {
    this.subscription = clientMaintenanceDataService.clientSelected$.subscribe(
      client => {}
    );
  }

  ngOnInit() {}

  setClientKey() {
    if (this.clientKey != null) {
      this.clientMaintenanceDataService.onClientSelect(this.clientKey);
      this.router.navigate(["/demographics"]);
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

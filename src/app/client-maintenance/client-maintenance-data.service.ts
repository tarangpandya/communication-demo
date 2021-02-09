import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable()
export class ClientMaintenanceDataService {
  private clientSelectedSource = new BehaviorSubject<number>(null);

  clientSelected$ = this.clientSelectedSource.asObservable();

  onClientSelect(clientKey: number) {
    this.clientSelectedSource.next(clientKey);
  }
}

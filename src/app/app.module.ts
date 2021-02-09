import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { MissionModule } from "./mission/mission.module";
import { ClientMaintenanceModule } from "./client-maintenance/client-maintenance.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MissionModule,
    ClientMaintenanceModule,
    RouterModule.forRoot([])
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

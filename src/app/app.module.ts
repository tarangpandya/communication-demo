import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { MissionControlComponent } from "./mission-control/mission-control.component";
import { AstronautComponent } from './astronaut/astronaut.component';
import { MissionService } from './mission.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "mission-control",
        component: MissionControlComponent
      }
    ])
  ],
  declarations: [AppComponent, HelloComponent, MissionControlComponent, AstronautComponent],
  bootstrap: [AppComponent],
  providers: [MissionService]
})
export class AppModule {}

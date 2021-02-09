import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MissionService } from "./mission.service";
import { MissionControlComponent } from "./mission-control/mission-control.component";
import { AstronautComponent } from "./astronaut/astronaut.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule,
  RouterModule.forRoot([
      {
        path: "mission-control",
        component: MissionControlComponent
      }
    ])
  ],
  declarations: [MissionControlComponent, AstronautComponent],
  providers: [MissionService]
})
export class MissionModule {}

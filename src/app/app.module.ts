import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { MissionModule } from "./mission/mission.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MissionModule,
    RouterModule.forRoot([])
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

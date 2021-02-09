import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ClientMaintenanceComponent } from "./client-maintenance.component";
import { ClientSearchComponent } from "./client-search/client-search.component";
import { FormsModule } from "@angular/forms";
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: ClientMaintenanceComponent,
        children: [
          {
            path: "search",
            component: ClientSearchComponent
          }
        ]
      }
    ])
  ],
  declarations: [ClientMaintenanceComponent, ClientSearchComponent],
  providers: []
})
export class ClientMaintenanceModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ClientMaintenanceComponent } from "./client-maintenance.component";
import { ClientDemographicsComponent } from "./client-demographics/client-demographics.component";
import { ClientSearchComponent } from "./client-search/client-search.component";
import { FormsModule } from "@angular/forms";
import { ClientNavComponent } from "./client-nav/client-nav.component";
import { ClientBreadcrumbComponent } from "./client-breadcrumb/client-breadcrumb.component";
import { ClientPhoneComponent } from "./client-phone/client-phone.component";
import { CreateReferralComponent } from "./create-referral/create-referral.component";

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
          },
          {
            path: "demographics",
            component: ClientDemographicsComponent
          },
          {
            path: "phone",
            component: ClientPhoneComponent
          }
        ]
      }
    ])
  ],
  declarations: [
    ClientMaintenanceComponent,
    ClientSearchComponent,
    ClientDemographicsComponent,
    ClientNavComponent,
    ClientBreadcrumbComponent,
    ClientPhoneComponent,
    CreateReferralComponent
  ],
  providers: []
})
export class ClientMaintenanceModule {}

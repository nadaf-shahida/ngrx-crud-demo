import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { logging } from "protractor";
import { LoginPageComponent } from "./Login/login-page/login-page.component";
import { SignupPageComponent } from "./signup/signup-page/signup-page.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {path:"login", component:LoginPageComponent},
  {path:"signup", component:SignupPageComponent},
  {
    path: "customers",
    loadChildren: "../app/customers/customers.module#CustomersModule"
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}

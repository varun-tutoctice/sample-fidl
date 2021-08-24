import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Project-Components/home/home.component';

const routes: Routes = [

  { path: "home", component: HomeComponent },
  // { path: "logout", component: LogoutComponent },
  // {
  //   path: "home",
  //   component: HomeComponent,
  //   children: [
  //     { path: "", component: FormComponent },
  //     { path: "existing", component: ExistingComponent },
  //     { path: "contact", component: ContactComponent },
  //   ],
  // },
  { path: "**", redirectTo: "home", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  HomeComponent,
]

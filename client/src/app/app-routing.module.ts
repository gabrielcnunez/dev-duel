import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DuelComponent } from './duel/duel.component';
import { HomeComponent } from './home/home.component';
import { InspectComponent } from './inspect/inspect.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "inspect", component: InspectComponent },
  { path: "duel", component: DuelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

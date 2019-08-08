import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetCdnComponent } from './get-cdn/get-cdn.component';
import { CheckVisitComponent } from './check-visit/check-visit.component';
import { CrowdMapComponent } from './crowd-map/crowd-map.component';

const routes: Routes = [
  { path: '', redirectTo: '/getcdn', pathMatch: 'full'},
  { path: 'getcdn', component: GetCdnComponent },
  { path: 'checkvisit', component: CheckVisitComponent },
  { path: 'crowdmap', component: CrowdMapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

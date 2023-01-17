import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalisviewComponent } from './detalisview/detalisview.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'agency/:id', component: DetalisviewComponent },
  { path: '**', component: PageNotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

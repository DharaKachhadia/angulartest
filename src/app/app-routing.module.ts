import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalisviewComponent } from './pages/detalisview/detalisview.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponentComponent } from './pages/page-not-found-component/page-not-found-component.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent,
  //   children: [
  //     {
  //       path: 'agency',
  //       loadChildren: () =>
  //         import('./pages/home/home.module').then((m) => m.HomeModule),
  //       pathMatch: 'full',
  //     },
  //     {
  //       path: '',
  //       loadChildren: () =>
  //         import('./pages/detalisview/detalisview.module').then(
  //           (m) => m.DetalisviewModule
  //         ),
  //       pathMatch: 'full',
  //     },
  //   ],
  // },
  // { path: '**', component: PageNotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

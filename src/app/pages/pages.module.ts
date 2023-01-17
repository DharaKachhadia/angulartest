import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { DetalisviewComponent } from './detalisview/detalisview.component';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [DetalisviewComponent, HomeComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatListModule,
  ],
})
export class PagesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoryNewComponent } from './components/category-new/category-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    CategoriesListComponent,
    CategoryNewComponent,
    CategoryEditComponent
  ],
  imports: [
    NgxPaginationModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ]
})
export class CategorieModule { }

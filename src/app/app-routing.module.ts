import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './core/components/admin/admin.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { NewCommandeComponent } from './commande/components/new-commande/new-commande.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { CategoriesListComponent } from './categorie/components/categories-list/categories-list.component';
import { CategoryNewComponent } from './categorie/components/category-new/category-new.component';

const routes: Routes = [
  {path:'',redirectTo:'/auth/login',pathMatch:'full'},
  {path:'auth',
    loadChildren:()=>import('./authentication/authentication.module')
    .then(m=>m.AuthenticationModule)
  },
  {path:'admin',component:AdminComponent,canActivate:[AuthenticationGuard],children:[
    {path:'', redirectTo:'dashboard', pathMatch:'full'},
    {path:'dashboard', component:DashboardComponent},
    {path: 'commandes/new',component: NewCommandeComponent},
    {path: 'categories',component: CategoriesListComponent},
    {path: 'categories/new',component: CategoryNewComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
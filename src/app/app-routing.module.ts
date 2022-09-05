import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './core/components/admin/admin.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { NewCommandeComponent } from './commande/components/new-commande/new-commande.component';
import { AuthenticationGuard } from './core/guards/authentication.guard';

const routes: Routes = [
  {path:'',redirectTo:'/auth/login',pathMatch:'full'},
  {path:'auth',
    loadChildren:()=>import('./authentication/authentication.module')
    .then(m=>m.AuthenticationModule)
  },
  {path:'admin',component:AdminComponent,canActivate:[AuthenticationGuard],children:[
    {path:'', redirectTo:'dashboard', pathMatch:'full'},
    {path:'dashboard', component:DashboardComponent},
    {path: 'commandes/new',component: NewCommandeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
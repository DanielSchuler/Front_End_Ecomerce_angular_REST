import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/auth/pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'static',
        loadChildren: () => import('./pages/static/static.module').then(m => m.StaticModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'static/welcome'
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'dashboard',component:DashboardComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'static/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


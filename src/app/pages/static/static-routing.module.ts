import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'welcome',
    loadChildren: () =>import('./pages/welcome/welcome.module').then(m=>m.WelcomeModule),
  },
  {
    path:'shop',
    loadChildren: () =>import('./pages/shop/shop.module').then(m=>m.ShopModule),
  },
  {
    path:'404',
    loadChildren: () =>import('./pages/not-found/not-found.module').then(m=>m.NotFoundModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule { }

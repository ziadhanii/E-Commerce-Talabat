import { Routes } from '@angular/router';
import { TestErrorComponent } from '../components/test-error/test-error.component';
import { ServerErrorComponent } from '../components/server-error/server-error.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'test-error', component: TestErrorComponent, data: { breadcrumb: 'Test Errors' }, title: 'Test Errors' },
  { path: 'server-error', component: ServerErrorComponent, data: { breadcrumb: 'Server Error' }, title: 'Server Error' },
  { path: 'not-found', component: NotFoundComponent, data: { breadcrumb: 'Not found' }, title: 'Not found' },
  {
    path: 'home',
    loadComponent: () => import('../components/home/home.component').then(m => m.HomeComponent),
    data: { breadcrumb: 'Home' }, title: 'Home'
  },
  {
    path: 'shop',
    loadComponent: () => import('../components/shop/shop.component').then(m => m.ShopComponent),
    data: { breadcrumb: 'Shop' }, title: 'Shop'
  },
  {
    path: 'basket',
    loadComponent: () => import('../components/basket/basket.component').then(m => m.BasketComponent),
    data: { breadcrumb: 'Basket' }, title: 'Basket'
  },
  {
    path: 'checkout',
    canActivate: [],
    loadComponent: () => import('../components/checkout/checkout.component').then(m => m.CheckoutComponent),
    data: { breadcrumb: 'Checkout' }, title: 'Checkout'
  },
  {
    path: 'orders',
    canActivate: [],
    loadComponent: () => import('../components/order/order.component').then(m => m.OrderComponent),
    data: { breadcrumb: 'Orders' }, title: 'Orders'
  },
  {
    path: 'account/login',
    loadComponent: () => import('../components/account/login/login.component').then(m => m.LoginComponent),
    data: { breadcrumb: 'Login' }, title: 'Login'
  },
  {
    path: 'account/register',
    loadComponent: () => import('../components/account/register/register.component').then(m => m.RegisterComponent),
    data: { breadcrumb: 'Register' }, title: 'Register'
  },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];

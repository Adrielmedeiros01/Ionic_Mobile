import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab7Page } from './tab7.page';

const routes: Routes = [
  {
    path: '',
    component: Tab7Page
  },  {
    path: 'wifi',
    loadChildren: () => import('./wifi/wifi.module').then( m => m.WifiPageModule)
  },
  {
    path: 'bluetooth',
    loadChildren: () => import('./bluetooth/bluetooth.module').then( m => m.BluetoothPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab7PageRoutingModule {}

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudioComponent } from './audio/audio.component';
import { PeripheralsComponent } from './peripherals/peripherals.component';
import { LedtvComponent } from './ledtv/ledtv.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { SmarthomeComponent } from './smarthome/smarthome.component';
import { LedprojectorsComponent } from './ledprojectors/ledprojectors.component';
import { SurveillanceComponent } from './surveillance/surveillance.component';
import { ShopComponent } from './shop/shop.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  {
    path:"" ,component:AudioComponent, pathMatch:"full"
  },
  {
    path:"peripherals" , component:PeripheralsComponent,
  },
  {
    path:"ledtv" , component:LedtvComponent,
  },
  {
    path:"accessories" , component:AccessoriesComponent,
  },
  {
    path:"smarthome" , component:SmarthomeComponent,
  },
  {
    path:"ledprojectors" , component:LedprojectorsComponent,
  },
  {
    path:"surveillance" , component:SurveillanceComponent,
  },

  {
    path:"shop" , component:ShopComponent,
  },
  {
    path:"support" , component:SupportComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

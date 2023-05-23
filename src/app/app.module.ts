import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudioComponent } from './audio/audio.component';
import { PeripheralsComponent } from './peripherals/peripherals.component';
import { LedtvComponent } from './ledtv/ledtv.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { SmarthomeComponent } from './smarthome/smarthome.component';
import { LedprojectorsComponent } from './ledprojectors/ledprojectors.component';
import { SurveillanceComponent } from './surveillance/surveillance.component';
import { ShopComponent } from './shop/shop.component';
import { SupportComponent } from './support/support.component';

@NgModule({
  declarations: [
    AppComponent,
    AudioComponent,
    PeripheralsComponent,
    LedtvComponent,
    AccessoriesComponent,
    SmarthomeComponent,
    LedprojectorsComponent,
    SurveillanceComponent,
    ShopComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

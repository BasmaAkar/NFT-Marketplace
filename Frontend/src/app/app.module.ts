import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ArtisicComponent } from './categories/artisic/artisic.component';
import { VehiclesComponent } from './categories/vehicles/vehicles.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PanierComponent } from './panier/panier.component';
import { AnimalsComponent } from './categories/animals/animals.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateNftComponent } from './create-nft/create-nft.component';
import { ShowNftComponent } from './show-nft/show-nft.component';
import { NavbarComponent } from './pages-elements/navbar/navbar.component';
import { FooterComponent } from './pages-elements/footer/footer.component';
import { WalletComponent } from './pages-elements/wallet/wallet.component';
import { EditNftComponent } from './edit-nft/edit-nft.component';
import { AboutUsComponent } from './about-us/about-us.component';
@NgModule({
  declarations: [
    AppComponent,

    ArtisicComponent,
    VehiclesComponent,
    ContactusComponent,
    PanierComponent,
    AnimalsComponent,
    CreateNftComponent,
    ShowNftComponent,
    NavbarComponent,
    FooterComponent,
    WalletComponent,
    EditNftComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

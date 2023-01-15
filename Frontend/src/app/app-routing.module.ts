import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsComponent } from './categories/animals/animals.component';
import { ArtisicComponent } from './categories/artisic/artisic.component';
import { NatureComponent } from './categories/nature/nature.component';
import { SportComponent } from './categories/sport/sport.component';
import { VehiclesComponent } from './categories/vehicles/vehicles.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CreateNftComponent } from './create-nft/create-nft.component';
import { ShowNftComponent } from './show-nft/show-nft.component';
import { PanierComponent } from './panier/panier.component';
import { WalletComponent } from './pages-elements/wallet/wallet.component';
import { EditNftComponent } from './edit-nft/edit-nft.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "wallet", component: WalletComponent },
  { path: "ContactUs", component: ContactusComponent },
  { path: "panier", component: PanierComponent },
  { path: "sport", component: SportComponent },
  { path: "artistic", component: ArtisicComponent },
  { path: "nature", component: NatureComponent },
  { path: "animals", component: AnimalsComponent },
  { path: "vehicles", component: VehiclesComponent },
  { path: "create-nft", component: CreateNftComponent },
  { path: "show-nft", component: ShowNftComponent },
  { path: "edit-nft", component: EditNftComponent },
  { path: "aboutUs", component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { ProfileComponent } from './user/profile/profile.component';
import { CartComponent } from './user/cart/cart.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotpasswordComponent } from './auth/forgotpassword/forgotpassword.component';
import { WishlistComponent } from './user/wishlist/wishlist.component';
import { MainComponent } from './main/main.component';
import { BodyComponent } from './main/body/body.component';
import { SidenavComponent } from './main/sidenav/sidenav.component';
import { BannerComponent } from './main/body/banner/banner.component';
import { LatestproductsComponent } from './main/body/latestproducts/latestproducts.component';
import { OffersComponent } from './main/body/offers/offers.component';
import { ShopbycategoryComponent } from './main/body/shopbycategory/shopbycategory.component';
import { LoaditemsPipe } from './pipes/loaditems/loaditems.pipe';
import { BestoffersComponent } from './main/body/bestoffers/bestoffers.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ProfileComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    WishlistComponent,
    BodyComponent,
    SidenavComponent,
    BannerComponent,
    LatestproductsComponent,
    OffersComponent,
    ShopbycategoryComponent,
    LoaditemsPipe,
    BestoffersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

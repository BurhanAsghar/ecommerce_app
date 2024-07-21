import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NewsletterComponent } from './shared/components/newsletter/newsletter.component';
import { BannerComponent } from './shop/components/banner/banner.component';
import { AllProductsComponent } from './shop/components/all-products/all-products.component';
import { WhoweareComponent } from './about/components/whoweare/whoweare.component';
import { OurAppComponent } from './about/components/our-app/our-app.component';
import { InformationSectionComponent } from './about/components/information-section/information-section.component';
import { LocationSectionComponent } from './contact/components/location-section/location-section.component';
import { ContactusSectionComponent } from './contact/components/contactus-section/contactus-section.component';
import { SelectItemsComponent } from './cart/components/select-items/select-items.component';
import { CheckoutSectionComponent } from './cart/components/checkout-section/checkout-section.component';
import { HomeModule } from './home/home.module';
import { HeroSectionComponent } from './home/components/hero-section/hero-section.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NewsletterComponent,
    BannerComponent,
    AllProductsComponent,
    WhoweareComponent,
    OurAppComponent,
    InformationSectionComponent,
    LocationSectionComponent,
    ContactusSectionComponent,
    SelectItemsComponent,
    CheckoutSectionComponent,
    HeroSectionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

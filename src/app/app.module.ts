import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookingCardComponent } from './components/booking-card/booking-card.component';
import { FoodCardComponent } from './components/food-card/food-card.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BookingComponent } from './pages/booking/booking.component';
import { EventsComponent } from './pages/events/events.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { Error404Component } from './pages/error404/error404.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BookingCardComponent,
    FoodCardComponent,
    ServiceCardComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    ContactComponent,
    BookingComponent,
    EventsComponent,
    EventCardComponent,
    DashboardComponent,
    AdminComponent,
    ReviewCardComponent,
    Error404Component,
    BookingFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import {Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './core/contact-us/contact-us.component';
import { environment } from 'src/environments/environment';
import { JounralComponent } from './jounral/jounral.component';
import { GallaryComponent } from './gallary/gallary.component';

// import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { AngularFireStorageModule } from '@angular/fire/storage';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'profile',                component: ProfilePageComponent },
  // { path: 'nucleoicons',          component: NucleoiconsComponent },
  { path: 'home',     component: HomePageComponent },
  // { path: 'examples/profile',     component: ProfileComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomePageComponent,
    ProfilePageComponent,
    ContactUsComponent,
    JounralComponent,
    GallaryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireDatabaseModule,
    AppRoutingModule,
    // AngularFireStorageModule ,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

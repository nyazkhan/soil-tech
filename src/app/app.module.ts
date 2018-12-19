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
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { FirebaseService } from './firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'profile',                component: ProfilePageComponent },
  { path: 'gallary',          component: GallaryComponent },
  { path: 'home',     component: HomePageComponent },
  { path: 'jounral',     component: JounralComponent }
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
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    AngularFireStorageModule ,

  ],
  providers: [AngularFirestore, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

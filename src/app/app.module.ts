import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from 'src/pages/home-page/home-page.component';
import { NavbarComponent } from 'src/shares/navbar/navbar.component';
import { SlidesComponent } from 'src/components/top-info/slides/slides.component';
import { TopInfoComponent } from 'src/components/top-info/top-info.component';
import { InfoComponent } from 'src/components/top-info/info/info.component';
import { PeopleInfoComponent } from 'src/components/people-info/people-info.component';
import { InvitationComponent } from 'src/components/invitation/invitation.component';
import { MemoriesComponent } from 'src/components/memories/memories.component';
import { PreWeedingComponent } from 'src/components/pre-weeding/pre-weeding.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopInfoComponent,
    NavbarComponent,
    SlidesComponent,
    InfoComponent,
    PeopleInfoComponent,
    InvitationComponent,
    MemoriesComponent,
    PreWeedingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    HomePageComponent,
    TopInfoComponent,
    NavbarComponent,
    SlidesComponent,
    InfoComponent,
    PeopleInfoComponent,
    InvitationComponent,
    MemoriesComponent,
    PreWeedingComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

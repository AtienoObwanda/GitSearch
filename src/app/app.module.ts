import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GitService } from './git.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RepositoryComponent } from './components/repository/repository.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    ProfileComponent,
    RepositoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }

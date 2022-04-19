import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GitService } from './git.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RepositoryComponent } from './components/repository/repository.component';
import { UsersComponent } from './components/users/users.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ApiDirective } from './api.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RepositoryComponent,
    UsersComponent,
    SearchComponent,
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    ApiDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }

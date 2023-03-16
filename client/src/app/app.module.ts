import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DuelComponent } from './duel/duel.component';
import { InspectComponent } from './inspect/inspect.component';
import { LinkButtonComponent } from './Components/link-button/link-button.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { TextInputComponent } from './Components/text-input/text-input.component';
import { UserService } from 'src/user.service';

@NgModule({
  declarations: [
    AppComponent,
    DuelComponent,
    InspectComponent,
    NavbarComponent,
    LinkButtonComponent,
    HomeComponent,
    TextInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

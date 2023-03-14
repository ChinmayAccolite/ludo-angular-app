import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { TokenDirective } from './token.directive';
import { BlueTokenDirective } from './blue-token.directive';
import { YellowTokenDirective } from './yellow-token.directive';
import { GreenTokenDirective } from './green-token.directive';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    TokenDirective,
    BlueTokenDirective,
    YellowTokenDirective,
    GreenTokenDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

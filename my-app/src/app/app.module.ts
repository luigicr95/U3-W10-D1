import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { PageContentComponent } from './page-content/page-content.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, MainContainerComponent, PageContentComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

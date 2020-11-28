import { BrowserModule,Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BlogpostModule} from './blogpost/blogpost.module';
import {HttpClientModule} from '@angular/common/http';
import {CmspazeModule} from './cmspaze/cmspaze.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PazeNotFoundComponent } from './paze-not-found/paze-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PazeNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BlogpostModule,
    HttpClientModule,
    CmspazeModule,
    AppRoutingModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }

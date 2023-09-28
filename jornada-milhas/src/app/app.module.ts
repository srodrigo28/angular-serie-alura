import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { BannerComponent } from './shared/banner/banner.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CardComponent } from './shared/card/card.component';
import {MatButtonModule} from '@angular/material/button';

import {MatToolbarModule} from '@angular/material/toolbar';
import { ContainerComponent } from './shared/container/container.component';
import { HomeComponent } from './pages/home/home.component';
import { CardBuscaComponent } from './shared/card-busca/card-busca.component';
import { MatCardModule } from '@angular/material/card';
import { CardDepoimentoComponent } from './shared/card-depoimento/card-depoimento.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    CardComponent,
    ContainerComponent,
    HomeComponent,
    CardBuscaComponent,
    CardDepoimentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

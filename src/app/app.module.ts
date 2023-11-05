import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GreetingComponent } from './greeting/greeting.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntroductionComponent } from './introduction/introduction.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { MyworkheaderComponent } from './myworkheader/myworkheader.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GreetingComponent,
    IntroductionComponent,
    SkillsetComponent,
    MyworkheaderComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

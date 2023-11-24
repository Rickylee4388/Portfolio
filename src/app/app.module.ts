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
import { ContactComponent } from './contact/contact.component';
import { ContactformComponent } from './contactform/contactform.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ResGreetingComponent } from './res-greeting/res-greeting.component';
import { ResHeaderComponent } from './res-header/res-header.component';
import { ResContactComponent } from './res-contact/res-contact.component';
import { ResFooterComponent } from './res-footer/res-footer.component';
import { ResIntroductionComponent } from './res-introduction/res-introduction.component';
import { ResMyworkheaderComponent } from './res-myworkheader/res-myworkheader.component';
import { ResPortfolioComponent } from './res-portfolio/res-portfolio.component';
import { ResSkillsetComponent } from './res-skillset/res-skillset.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GreetingComponent,
    IntroductionComponent,
    SkillsetComponent,
    MyworkheaderComponent,
    PortfolioComponent,
    ContactComponent,
    ContactformComponent,
    ResGreetingComponent,
    ResHeaderComponent,
    ResContactComponent,
    ResFooterComponent,
    ResIntroductionComponent,
    ResMyworkheaderComponent,
    ResPortfolioComponent,
    ResSkillsetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

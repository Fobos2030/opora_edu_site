import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import { CountUpModule } from 'ngx-countup';
import { NgxTypedJsModule } from 'ngx-typed-js';
// import {TabsModule} from 'ngx-tabset';
import { TooltipModule } from 'ng2-tooltip-directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { WelcomeComponent } from './components/common/welcome/welcome.component';
import { AboutComponent } from './components/common/about/about.component';
import { EducationSystem2Component } from './components/common/education-system2/education-system2.component';
import { CtaComponent } from './components/common/cta/cta.component';
import { FunfactsComponent } from './components/common/funfacts/funfacts.component';
import { PartnersComponent } from './components/common/partners/partners.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { DiplomsComponent } from './components/common/diploms/diploms.component';
import { ReviewsComponent } from './components/common/reviews/reviews.component';
import { FeedbackComponent } from './components/common/feedback/feedback.component';
import { FaqComponent } from './components/common/faq/faq.component';
import { PricingComponent } from './components/common/pricing/pricing.component';
import { ContactComponent } from './components/common/contact/contact.component';
import { ChinaMissionComponent } from './components/common/china-mission/china-mission.component';
import { EducationSystemComponent } from './components/common/education-system/education-system.component';
import { OurExpertsComponent } from './components/common/our-experts/our-experts.component';
import { PaymentFormModule90 } from './components/common/payment-form90/payment-form90.module';
import { PaymentFormModule130 } from './components/common/payment-form130/payment-form130.module';
import { PaymentFormModule230 } from './components/common/payment-form230/payment-form230.module';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TimerComponent } from './components/common/timer/timer.component';

@NgModule({
    declarations: [
        AppComponent,
        PreloaderComponent,
        HomeComponent,
        NavbarComponent,
        WelcomeComponent,
        AboutComponent,
        EducationSystem2Component,
        CtaComponent,
        FunfactsComponent,
        PartnersComponent,
        DiplomsComponent,
        FooterComponent,
        ReviewsComponent,
        FeedbackComponent,
        FaqComponent,
        PricingComponent,
        ContactComponent,
        ChinaMissionComponent,
        EducationSystemComponent,
        OurExpertsComponent,
        TimerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgxScrollTopModule,
        CarouselModule,
        FormsModule,
        CountUpModule,
        TooltipModule,
        NgxTypedJsModule,
        MatDialogModule,
        PaymentFormModule90,
        PaymentFormModule130,
        PaymentFormModule230,
        HttpClientModule,
        MatSnackBarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

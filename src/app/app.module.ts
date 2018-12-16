import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiziComponent } from './servizi/servizi.component';
import { ContattiComponent } from './contatti/contatti.component';
import { SuDiNoiComponent } from './su-di-noi/su-di-noi.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrenotaVisitaComponent } from './prenota-visita/prenota-visita.component';
import { RicercaRisultatiComponent } from './ricerca-risultati/ricerca-risultati.component';
import { VisualizzaListinoComponent } from './visualizza-listino/visualizza-listino.component';
import { FormPrenotazioneComponent } from './form-prenotazione/form-prenotazione.component';
import{NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import {DataTableModule} from "angular-6-datatable";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiziComponent,
    ContattiComponent,
    SuDiNoiComponent,
    NavbarComponent,
    PrenotaVisitaComponent,
    RicercaRisultatiComponent,
    VisualizzaListinoComponent,
    FormPrenotazioneComponent,
    FooterComponent,
    DatePickerComponent,
    TooltipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

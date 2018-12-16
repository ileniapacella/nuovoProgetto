import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContattiComponent} from "./contatti/contatti.component";
import {PrenotaVisitaComponent} from "./prenota-visita/prenota-visita.component";
import {RicercaRisultatiComponent} from "./ricerca-risultati/ricerca-risultati.component";
import {ServiziComponent} from "./servizi/servizi.component";
import {SuDiNoiComponent} from "./su-di-noi/su-di-noi.component";
import {VisualizzaListinoComponent} from "./visualizza-listino/visualizza-listino.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
  path: 'contatti',
    component: ContattiComponent
  },
  {
  path: 'prenota-visita',
    component: PrenotaVisitaComponent
  },
  {
  path: 'ricerca-risultati',
    component: RicercaRisultatiComponent
  },
  {
  path: 'servizi',
    component: ServiziComponent
  },
{
  path: 'su-di-noi',
    component: SuDiNoiComponent
},
  {
    path: 'visualizza-listino',
    component: VisualizzaListinoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

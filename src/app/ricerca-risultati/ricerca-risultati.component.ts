import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ricerca-risultati',
  templateUrl: './ricerca-risultati.component.html',
  styleUrls: ['./ricerca-risultati.component.css']
})

export class RicercaRisultatiComponent implements OnInit {
  public  data: any;
  constructor() { }

  ngOnInit() {
    this.data= [{"id":13890, "risultato":"pos"}, {"id":13890, "risultato":"neg"}, {"id":13890, "risultato":"pos"}, {"id":13890, "risultato":"neg"}, {"id":13890, "risultato":"pos"}, {"id":13890, "risultato":"neg"}];
  }

}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-prenotazione',
  templateUrl: './form-prenotazione.component.html',
  styleUrls: ['./form-prenotazione.component.css']
})
export class FormPrenotazioneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery.validator.addMethod(
      "maiuscola",
      function(value, element){

        var patt = new RegExp("^[A-Z]{1,1}.*$");
        if(patt.test(value)){
          return true;
        }
        return false;
      }, "Il nome deve iniziare con la lettera maiuscila" );
    jQuery.validator.addMethod(
      "maiuscola",
      function(value, element){

        var patt = new RegExp("^[A-Z]{1,1}.*$");
        if(patt.test(value)){
          return true;
        }
        return false;
      }, "Nome non valido" );
    $("#formUtente").validate({
      rules: {
        nome: {
          required: true,
          minlength: 2
        }
      },
      messages: {
        nome: {
          required: "Inserire un nome",
          minlength: "Il nome deve essere composto da almeno tre caratteri"
        }
      }
    })
  }

}

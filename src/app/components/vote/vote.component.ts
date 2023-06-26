import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Student } from '../../models/student'

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})

export class VoteComponent{
  datos = [
    { id: 11, name: 'UNAJ4EVER', mesa:"123", votos:{} },
    { id: 12, name: 'ALL4UNAJ', mesa:"456", votos:{} },
    { id: 13, name: 'xUNAJ', mesa:"234", votos:{}},
    { id: 14, name: 'IamUNAJ', mesa:"567", votos:{} },
    { id: 15, name: 'MyUNAJ', mesa:"678", votos:{} }
  ];
  vote(){
      alert("Usted ha votado correctamente.");
  }
  /*
    let array_votos: string[] = [];
    let recuento_votos: number[] = [0,0,0];

    document.addEventListener('DOMContentLoaded', () => {
        anadirHandlers();
    });

    function anadirHandlers(){
        document.getElementById('mail').addEventListener('blur', () => {
            comprobarMail();
        });    
        document.getElementById('votar').addEventListener('click', () => {
            comprobarVoto();
        });
        document.getElementById('recuento').addEventListener('click', () => {
            contarVotos();
        });
    }

    function comprobarVoto(){
        let votante = (<HTMLInputElement>document.getElementById('mail')).value;
        
        if (noExiste(votante)) {
            let votos=document.getElementsByName("votacion");
            for (let i=0; i< votos.length; i++) {
                if ((<HTMLInputElement>votos[i]).checked){
                    var voto = (<HTMLInputElement>votos[i]).value;
                }
            }
            mostrarVotos(votante, <string>voto);
            registrarVoto(<string>voto);
        }
    }

    function noExiste(votante: string) {
        if (array_votos.indexOf(votante) >= 0) 
        {
            console.log(array_votos.indexOf(votante));
            alert("Esa persona ya ha votado. No puedo añadir su voto");
            return false;
        } else {
            console.log("else " + array_votos.indexOf(votante));
            return true;
        }
    }

    function mostrarVotos(votante: string, voto: string){
        let listaResultados = document.getElementById("resultados");
        let elemento = document.createElement('li');
            
        elemento.innerHTML = votante + " -> " + voto;
        listaResultados.appendChild(elemento);
        array_votos.push(votante);
    }

    function registrarVoto(voto: string) {
        let v = voto;
        if (v == "Opción 1") { recuento_votos[0]++;}
        else if (v == "Opción 2"){ recuento_votos[1]++;}
        else { recuento_votos[2]++;}
    }

    function contarVotos() {
        let cadena = "1 " + recuento_votos[0] + "<br> 2 " + recuento_votos[1] + "<br>3 " + recuento_votos[2];
        let panel = document.getElementById("panelResultados");
        let parrafo = document.createElement("p");

        parrafo.innerHTML = cadena;

        panel.appendChild(parrafo);
        console.log ("1 " + recuento_votos[0]);
        console.log ("2 " + recuento_votos[1]);
        console.log ("3 " + recuento_votos[2]);
    }

    function comprobarMail() {
        let m = (<HTMLInputElement>document.getElementById("mail")).value;
        let expreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
          
        if(! expreg.test(m)) {
            alert("El mail NO es correcto");
            (<HTMLInputElement>document.getElementById("mail")).focus();
        } 
    }*/
}
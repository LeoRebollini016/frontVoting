import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: string;
  public autor1: string;
  public autor2: string;


  constructor() { 
      this.title= "Sistema de Votación electronico";
      this.autor1 = "Gaston Alanis"; 
      this.autor2 = "Leonel Rebollini" ;
  }

  ngOnInit(): void {
  }
}

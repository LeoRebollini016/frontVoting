import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public state: boolean;
  
  constructor(){
    this.state = true;
  }
  ngOnInit(): void {
    $('p a').click(function(){
      $('form').animate({height: "toggle", opacity:"toggle"}, "slow");
    }); 
    if(this.state)
      $('.reg-formlogin-form"').animate({display: "none"});
    else
      $('.login-form').animate({display:"none"});
  }
  setStateLogin(state: boolean){
      this.state = state;
  }
}

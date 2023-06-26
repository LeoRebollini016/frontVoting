import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { VotingService } from '../../services/voting.service';
import { Global } from '../../services/global';
import { Router,ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[VotingService]
})
export class RegisterComponent implements OnInit{
 // public url: string;

  constructor(){}
  
  ngOnInit(): void {}
}
/* implements OnInit {
  public url: string;
  public student!: Student;
  public confirm: boolean;

  constructor(
      private _studentService: StudentService,
     private _router: Router,
      private _route: ActivatedRoute
    ) { 
      this.url = Global.url
      this.confirm = false;
  }
   ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params.id;
      this.getStudent(id);
    });
  }
  getStudent(id: any){
    this._studentService.getStudent(id).subscribe(
        response => {
            this.student = response;
        },
        error => {
          console.log(<any>error);
        }
      );
  }
  deleteStudent(id: any){
    console.log("llego aca");
    this._studentService.deleteStudent(id).subscribe(
      response => {
        if(response){
          this.confirm = false;
          this._router.navigate(['/student']);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
Comprobar email
function comprobarMail() {
    var m = document.getElementById("mail").value;
    var expreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
      
    if(! expreg.test(m)) {
      alert("El mail NO es correcto");
      document.getElementById("mail").focus();
    } 

  }

  */
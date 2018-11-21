import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import * as imagepicker from "nativescript-imagepicker";

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html', //html file for frontend of the component
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  _user = "";
  _pass = "";
  srcImg = "";

  constructor(private router: Router) { }

  // What you want to run before the component renders.
  ngOnInit() {
    this._user = "workshop@gmail.com"
  }
  
  public ulogin() {
    if(this._user == "workshop@gmail.com" && this._pass == "123"){
      this.router.navigate(['/afterlogin']);
    }
    else{
      alert("Lol. You even dont know your credentials!");
    }
  }

  public imagepicker() {
    let _that = this;

    let context = imagepicker.create({
      mode: "single" // use "multiple" for multiple selection
    });
    context
    .authorize()
    .then(function() {
        return context.present();
    })
    .then(function(selection) {
        selection.forEach(function(selected) {
          _that.srcImg = selected['_android'];
        });
    }).catch(function (e) {
        console.log(e);
    });
  }
}

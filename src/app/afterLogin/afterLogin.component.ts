import { Component, OnInit} from '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'app-afterLogin',
  templateUrl: './afterLogin.component.html', //html file for frontend of the component
  styleUrls: ['./afterLogin.component.scss']
})
export class AfterLoginComponent implements OnInit {

  jsonlvl;
  locksquare;

  constructor() { 
  }

  // What you want to run before the component renders.
  ngOnInit() {
    this.jsonlvl = [
      [ "","","","","","",5,4,1 ],   
      [ "",3,7,"","",4,"",6,"" ],    
      [ "",4,8,5,"","","",3,"" ],
      [ "","",1,9,2,"",4,"","" ],    
      [ "",8,"","",4,"","",5,"" ],   
      [ "","",9,"",3,5,2,"","" ],  
      [ "",7,"","","",1,6,2,"" ],  
      [ "",1,"",4,"","",3,9,"" ],  
      [ 3,2,5,"","","","","","" ] 
    ];
  }
}
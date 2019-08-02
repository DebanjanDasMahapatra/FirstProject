import { Component } from '@angular/core';
import { VisitorService } from './visitor.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  show: boolean = false;
  registered: boolean = false;
  fetching: boolean = false;
  cdn: string = '';
  user = new User;
  email: string = '';
  secretKey: string = '';

  constructor(private _visitor: VisitorService) { }

  getCDN() {
    this.cdn = '<script src="https://somenumber.ngrok.io/cdns/visitorlogger.js"></script>';
  }

  register(e: any) {
    this.registered = true;
    console.log(e);

    // this._visitor.registerUser(this.user).subscribe(
    //   data=>{
    //     console.log('Data: '+JSON.stringify(data));
    //     e.target.reset();
    //     this.registered = false;
    //   },
    //   error=> {
    //     console.log('Error: '+error);
    //     this.registered = false;
    //   }
    // )
  }

  getVisits(e: any) {
    this.fetching = true;
    this._visitor.fetchUserData({ email: this.email, secretKey: this.secretKey }).subscribe(
      data => {
        console.log('Data: ' + JSON.stringify(data));
        e.reset();
        this.fetching = false;
      },
      error => {
        console.log('Error: ' + error);
        this.fetching = false;
      }
    )
  }
}

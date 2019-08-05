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
  retrieved: boolean = false;
  cdn: string = '';
  user = new User;
  receivedUser;
  email: string = '';
  secretKey: string = '';

  constructor(private _visitor: VisitorService) { }

  getCDN() {
    this.cdn = '<script src="https://somenumber.ngrok.io/cdns/visitorlogger.js"></script>';
  }

  register(e: any) {
    this.registered = true;
    this._visitor.registerUser(this.user).subscribe(
      data => {
        console.log('Data: ' + JSON.stringify(data));
        if(data.status) {
          alert('Registered Successfully !!!');
        } else {
          alert('Registration Failure: '+data.message);
        }
        e.target.reset();
        this.registered = false;
      },
      error => {
        console.log('Registration Failure: ' + error.statusCode + ' ' + error.statusText);
        this.registered = false;
      }
    )
  }

  getVisits(e: any) {
    this.fetching = true;
    this._visitor.fetchUserData({ email: this.email, secretKey: this.secretKey }).subscribe(
      data => {
        console.log('Data: ' + JSON.stringify(data));
        e.reset();
        if(data.status) {
          this.receivedUser = data.data;
          this.receivedUser = {
            email: "abc@gmail.com",
            baseDomain: "example.com",
            paths: [
              {
                path: "/login",
                totalVisitorCount: 100,
                visitors: {}
              },
              {
                path: "/read",
                totalVisitorCount: 20,
                visitors: {}
              }
            ]
          }
          this.retrieved = true;
        } else {
          alert('Data retrieval problem: '+data.message);
        }
        this.fetching = false;
      },
      error => {
        console.log('Data retrieval problem: ' + error);
        this.fetching = false;
      }
    )
  }
}

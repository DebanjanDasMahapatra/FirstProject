import { Component, OnInit } from '@angular/core';
import { VisitorService } from '../visitor.service';
import { User } from '../user';

@Component({
  selector: 'app-get-cdn',
  templateUrl: './get-cdn.component.html',
  styleUrls: ['./get-cdn.component.css','../app.component.css']
})
export class GetCdnComponent implements OnInit {

  constructor(private _visitor: VisitorService) { }

  show: boolean = false;
  registered: boolean = false;
  cdn: string = '';
  user = new User;
  receivedUser;
  email: string = '';
  secretKey: string = '';

  ngOnInit() {
  }

  getCDN() {
    this.cdn = '<script src="https://somenumber.ngrok.io/cdns/visitorlogger.js"></script>';
  }

  register(e: any) {
    this.registered = true;
    this._visitor.registerUser(this.user).subscribe(
      data => {
        console.log('Data: ' + JSON.stringify(data));
        if (data.status) {
          alert('Registered Successfully !!!');
          this.getCDN();
        } else {
          alert('Registration Failure: ' + data.message);
        }
        e.target.reset();
        this.registered = false;
      },
      error => {
        alert('Registration Failure: ' + error.status + ' ' + error.statusText);
        this.registered = false;
      }
    )
  }

}

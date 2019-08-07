import { Component } from '@angular/core';
import { VisitorService } from './visitor.service';
import { User } from './user';
import { IBox, IMapOptions, MarkerTypeId } from "angular-maps";

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

  fetchEmail: string = '';
  fetchBaseDomain: string = '';
  visitors = [];
  response = JSON.parse('{"status":true,"message":"user found","data":{"email":"debanjandm123@gmail.com","baseDomain":"eb54b6c3.ngrok.io","paths":[{"path":"cdns/Stock.html","totalVisitorCount":7,"visitors":[{"ip":"223.223.137.66","count":1,"geoInfo":{"range":[3755968512,3755970559],"country":"IN","region":"WB","eu":"0","timezone":"Asia/Kolkata","city":"Kolkata","ll":[22.572,88.367],"metro":0,"area":10}},{"ip":"2405:204:402a:4684:45b8:6bcf:f228:3904","count":1,"geoInfo":{"range":"","country":"IN","region":"WB","city":"Kolkata","ll":[22.572,88.367],"metro":0,"area":1,"eu":"0","timezone":"Asia/Kolkata"}},{"ip":"2409:4064:410:a32d:68bc:531f:52ef:d90","count":4,"geoInfo":{"range":"","country":"IN","region":"BR","city":"Patna","ll":[25.6005,85.1147],"metro":0,"area":200,"eu":"0","timezone":"Asia/Kolkata"}},{"ip":"103.42.172.246","count":1,"geoInfo":{"range":[1730849792,1730850047],"country":"IN","region":"WB","eu":"0","timezone":"Asia/Kolkata","city":"Kolkata","ll":[22.572,88.367],"metro":0,"area":5}}]}]}}');

  private _markerTypeId = MarkerTypeId 
            // a little trick so we can use enums in the template...

  private _options: IMapOptions = {
      disableBirdseye: false,
      disableStreetside: false,
      navigationBarMode: 2
  };
      // for all available options for the various components, see IInfoWindowOptions, IInfoWindowAction, IMarkerOptions, IMapOptions, IMarkerIconInfo

  private _click(){
      console.log("hello world...");
  }

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
    this._visitor.fetchUserData({ email: this.fetchEmail, baseDomain: this.fetchBaseDomain }).subscribe(
      data => {
        console.log(JSON.stringify(data));
        e.reset();
        if(data.status) {
          this.receivedUser = data.data;
          alert(JSON.stringify(data.paths));
          for(let i=0;i<this.receivedUser.paths.length;i++)
          this.visitors.push(Object.keys(this.receivedUser.paths[i].visitors));
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

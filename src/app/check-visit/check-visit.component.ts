import { Component, OnInit } from '@angular/core';
import { VisitorService } from '../visitor.service';

@Component({
  selector: 'app-check-visit',
  templateUrl: './check-visit.component.html',
  styleUrls: ['./check-visit.component.css','../app.component.css']
})
export class CheckVisitComponent implements OnInit {

  constructor(private _visitor: VisitorService) { }

  receivedUser;
  fetching: boolean = false;
  retrieved: boolean = false;
  debuging: boolean = true;

  fetchEmail: string = '';
  fetchBaseDomain: string = '';
  visitors = [];
  showPaths: boolean[] = [];
  showIpInfo: boolean[] = [];

  ngOnInit() {
    if(localStorage.getItem('credentials')) {
      let details = JSON.parse(localStorage.getItem('credentials'));
      if(this.debuging)
        this.temp();
      else {
        this.fetchEmail = details.email;
        this.fetchBaseDomain = details.baseDomain;
        this.getVisits(null);
      }
    }
  }

  resetData() {
    this.receivedUser = undefined;
    this.retrieved = false;
    localStorage.removeItem('credentials');
  }

  toggleDisplayPath(i: number) {
    this.showPaths[i] = !this.showPaths[i];
  }

  getVisits(e: any) {
    this.fetching = true;
    this._visitor.fetchUserData({ email: this.fetchEmail, baseDomain: this.fetchBaseDomain }).subscribe(
      data => {
        console.log(JSON.stringify(data));
        if(!this.debuging)
        e.reset();
        if (data.status) {
          localStorage.setItem('credentials',JSON.stringify(data.data));
          this.receivedUser = data.data;
          this.visitors = [];
          for (let i = 0; i < this.receivedUser.paths.length; i++) {
            this.showPaths.push(false);
            this.visitors.push(this.receivedUser.paths[i].visitors);
          }
          this.retrieved = true;
        } else {
          alert('Data retrieval problem: ' + data.message);
        }
        this.fetching = false;
      },
      error => {
        console.log('Data retrieval problem: ' + error);
        this.fetching = false;
      }
    )
  }

  temp(flag: boolean = false) {
    this.receivedUser = JSON.parse('{"status":true,"message":"user found","data":{"email":"debanjandm123@gmail.com","baseDomain":"9c93a2f4.ngrok.io","paths":[{"path":"cdns/","totalVisitorCount":29,"visitors":[{"ip":"2409:4061:690:813b:445f:ceca:d167:1705","count":3,"geoInfo":{"range":"","country":"IN","region":"WB","city":"Barddhaman","ll":[23.2406,87.8694],"metro":0,"area":100,"eu":"0","timezone":"Asia/Kolkata"}},{"ip":"202.142.104.70","count":1,"geoInfo":{"range":[3398330368,3398331391],"country":"IN","region":"WB","eu":"0","timezone":"Asia/Kolkata","city":"Kolkata","ll":[22.572,88.367],"metro":0,"area":5}},{"ip":"45.112.70.10","count":1,"geoInfo":{"range":[762332672,762333183],"country":"IN","region":"WB","eu":"0","timezone":"Asia/Kolkata","city":"Kolkata","ll":[22.572,88.367],"metro":0,"area":20}},{"ip":"150.129.64.162","count":1,"geoInfo":{"range":[2525052928,2525053951],"country":"IN","region":"WB","eu":"0","timezone":"Asia/Kolkata","city":"Kolkata","ll":[22.572,88.367],"metro":0,"area":20}},{"ip":"2402:3a80:a64:dbbe:ee21:531e:82ab:ef70","count":2,"geoInfo":{"range":"","country":"IN","region":"WB","city":"Kolkata","ll":[22.572,88.367],"metro":0,"area":5,"eu":"0","timezone":"Asia/Kolkata"}},{"ip":"202.142.68.6","count":1,"geoInfo":{"range":[3398321152,3398321407],"country":"IN","region":"WB","eu":"0","timezone":"Asia/Kolkata","city":"Kolkata","ll":[22.572,88.367],"metro":0,"area":100}},{"ip":"2405:205:6326:2b50:e986:e02d:a97d:9d4","count":1,"geoInfo":{"range":"","country":"IN","region":"WB","city":"Barddhaman","ll":[23.2406,87.8694],"metro":0,"area":100,"eu":"0","timezone":"Asia/Kolkata"}},{"ip":"66.249.84.55","count":1,"geoInfo":{"range":[1123636224,1123636479],"country":"US","region":"","eu":"0","timezone":"","city":"","ll":[37.751,-97.822],"metro":0,"area":1000}},{"ip":"103.77.137.245","count":1,"geoInfo":{"range":[1733134592,1733134847],"country":"IN","region":"WB","eu":"0","timezone":"Asia/Kolkata","city":"Kolkata","ll":[22.572,88.367],"metro":0,"area":500}},{"ip":"45.123.162.197","count":2,"geoInfo":{"range":[763076608,763077631],"country":"IN","region":"WB","eu":"0","timezone":"Asia/Kolkata","city":"Kolkata","ll":[22.572,88.367],"metro":0,"area":100}},{"ip":"1.23.152.217","count":2,"geoInfo":{"range":[18323456,18325503],"country":"IN","region":"WB","eu":"0","timezone":"Asia/Kolkata","city":"Kolkata","ll":[22.572,88.367],"metro":0,"area":5}},{"ip":"2409:4060:2187:28:916b:ac01:2b6a:2d6a","count":2,"geoInfo":{"range":"","country":"IN","region":"WB","city":"Kolkata","ll":[22.572,88.367],"metro":0,"area":1,"eu":"0","timezone":"Asia/Kolkata"}},{"ip":"2409:4064:2590:bf44:a15e:199b:3d40:adba","count":1,"geoInfo":{"range":"","country":"IN","region":"","city":"","ll":[20,77],"metro":0,"area":100,"eu":"0","timezone":"Asia/Kolkata"}},{"ip":"2409:4060:209f:15ed:d350:f885:8c8:4c4","count":1,"geoInfo":{"range":"","country":"IN","region":"WB","city":"Kolkata","ll":[22.572,88.367],"metro":0,"area":100,"eu":"0","timezone":"Asia/Kolkata"}},{"ip":"139.5.230.83","count":1,"geoInfo":{"range":[2332419584,2332419711],"country":"IN","region":"WB","eu":"0","timezone":"Asia/Kolkata","city":"Kolkata","ll":[22.572,88.367],"metro":0,"area":50}},{"ip":"43.224.3.151","count":1,"geoInfo":{"range":[736100864,736101375],"country":"IN","region":"BR","eu":"0","timezone":"Asia/Kolkata","city":"Patna","ll":[25.6005,85.1147],"metro":0,"area":10}},{"ip":"2405:204:a481:5aa1:6001:3167:83bf:5d32","count":1,"geoInfo":{"range":"","country":"IN","region":"UP","city":"Lucknow","ll":[26.8509,80.916],"metro":0,"area":50,"eu":"0","timezone":"Asia/Kolkata"}},{"ip":"103.42.173.6","count":2,"geoInfo":{"range":[1730850048,1730850175],"country":"IN","region":"WB","eu":"0","timezone":"Asia/Kolkata","city":"Kolkata","ll":[22.572,88.367],"metro":0,"area":5}},{"ip":"2409:4064:38e:dd69:41d7:e1c8:c7a0:2f90","count":3,"geoInfo":{"range":"","country":"IN","region":"BR","city":"Patna","ll":[25.6005,85.1147],"metro":0,"area":100,"eu":"0","timezone":"Asia/Kolkata"}},{"ip":"2405:204:5388:e040:90e9:34af:6623:7922","count":1,"geoInfo":{"range":"","country":"IN","region":"KA","city":"Bengaluru","ll":[12.9833,77.5833],"metro":0,"area":20,"eu":"0","timezone":"Asia/Kolkata"}}]}]}}').data;
    if(!flag)
    localStorage.setItem('credentials',JSON.stringify(this.receivedUser));
    this.visitors = [];
    for (let i = 0; i < this.receivedUser.paths.length; i++)
      this.visitors.push(this.receivedUser.paths[i].visitors);
    this.retrieved = true;
  }

}

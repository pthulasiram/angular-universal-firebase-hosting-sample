import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  title = 'Some demo app that\'s SSR\'ed';
  news$: any;
  constructor(private http: Http) { }

  ngOnInit() {
    this.news$ = this.http
      .get('https://deployblank.firebaseio.com/item.json')
      .map(res => res.json());
  }

}

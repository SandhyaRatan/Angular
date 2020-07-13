import { Component, OnInit } from '@angular/core';
import { DataRouteService } from '../services/DataRoute.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  goal: any;
  constructor(private service: DataRouteService, private router: Router){ }

  ngOnInit() {
    this.service.goal.subscribe(res => this.goal = res);
  }

  sendMeHome(){
    this.router.navigate(['']);
  }

}

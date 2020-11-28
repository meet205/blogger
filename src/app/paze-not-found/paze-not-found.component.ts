import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-paze-not-found',
  templateUrl: './paze-not-found.component.html',
  styleUrls: ['./paze-not-found.component.css']
})
export class PazeNotFoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  gotoHome() {
     this.router.navigate(['/']);
  }

}

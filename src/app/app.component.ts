import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Buy and Sell Quick!';

  constructor(
    private router: Router,
  ) {}

  goToProfile() {
    this.router.navigateByUrl('/my-listings');
  }
}

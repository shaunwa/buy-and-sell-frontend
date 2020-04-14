import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  email = '';
  message = '';

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    alert(`Your email is ${this.email} and you said "${this.message}"`);
  }
}

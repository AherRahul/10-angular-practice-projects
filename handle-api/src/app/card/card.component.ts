import { Component, Input, OnInit } from '@angular/core';
import { faEnvelope, faMapMarkedAlt, faPhone, faDatabase, faUnlock } from "@fortawesome/free-solid-svg-icons";

import { User } from '../utils/user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() user: User;
  loadData = false;

  faEnvelope = faEnvelope;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  faDatabase = faDatabase;
  faUnlock = faUnlock;

  constructor() { }

  ngOnInit() {
    console.log(this.user);
    
    setTimeout(() => {
      this.loadData = true;
    }, 300);
  }

}

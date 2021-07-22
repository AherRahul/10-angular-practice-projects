import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'counter-app';
  count: number = 0;


  handleReset() {
    if (this.count !== 0)
    {
      window.alert('Are you sure. You want to reset counter..?');
      this.count = 0;
    }
  }

  handleIncrement() {
    if (this.count >= 0 && this.count < 100)
    {
      this.count++;
    }
    else {
      window.alert('Maximum limit is 100.');
    }
  }

  handleDecrement() {
    if (this.count > 0 &&  this.count <= 100) {
      this.count--;
    }
    else {
      window.alert('Minimum limit is 0.');
    }
  }
}

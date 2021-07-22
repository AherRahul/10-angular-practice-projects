import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Tic-Tac-Toe';
  winMessage: string = '';
  isCrossed: boolean = false;
  itemArray: string[] = new Array(9).fill('empty');
  currentClicked: number = 0;

  constructor(
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.toastr.success('Welcome to Tic-Tac-Toe Game..!!');
  }

  handleClick = (itemNumber: number) => {
    this.currentClicked = itemNumber + 1;

    if (this.winMessage) {
      return this.toastr.success(this.winMessage);
    }

    if (this.itemArray[itemNumber] === 'empty') {
      this.itemArray[itemNumber] = this.isCrossed ? 'cross' : 'circle';

      this.isCrossed = !this.isCrossed;
    } else {
      return this.toastr.warning('Already field');
    }

    this.checkIsWinner();
  }

  reloadGame = () => {
    this.winMessage = '';
    this.isCrossed = false;
    this.itemArray = new Array(9).fill('empty');
    this.currentClicked = 0;
    this.enableBox();
  }

  disableBox = () => {
    let messageForWinner = this.winMessage.split(' ').slice(0, 1);

    if (this.winMessage) {
      for (let i = 0; i < this.itemArray.length; i++) {
        if (this.itemArray[i] !== messageForWinner[0]) {
          document.getElementById('card-box_' + i).classList.add('disabled-box');
        } else {
          document.getElementById('card-box_' + i).classList.add('win-box');
        }
      }
    }
  }

  enableBox = () => {
    if (!this.winMessage) {
      for(let i = 0; i < this.itemArray.length; i++) {
        document.getElementById('card-box_' + i).classList.remove('disabled-box');
      }
    }
  }

  checkIsWinner = () => {
    // Checking Winner Logic
    if (this.itemArray[0] === this.itemArray[1] && this.itemArray[0] === this.itemArray[2] && this.itemArray[0] !== 'empty') {
      this.winMessage = `${this.itemArray[0]} won`;
      this.disableBox();
    } else if (this.itemArray[3] === this.itemArray[4] && this.itemArray[3] === this.itemArray[5] && this.itemArray[3] !== 'empty') {
      this.winMessage = `${this.itemArray[3]} won`;
      this.disableBox();
    } else if (this.itemArray[6] === this.itemArray[7] && this.itemArray[6] === this.itemArray[8] && this.itemArray[6] !== 'empty') {
      this.winMessage = `${this.itemArray[6]} won`;
      this.disableBox();
    } else if (this.itemArray[0] === this.itemArray[3] && this.itemArray[0] === this.itemArray[6] && this.itemArray[0] !== 'empty') {
      this.winMessage = `${this.itemArray[0]} won`;
      this.disableBox();
    } else if (this.itemArray[1] === this.itemArray[4] && this.itemArray[1] === this.itemArray[7] && this.itemArray[1] !== 'empty') {
      this.winMessage = `${this.itemArray[1]} won`;
      this.disableBox();
    } else if (this.itemArray[2] === this.itemArray[5] && this.itemArray[2] === this.itemArray[8] && this.itemArray[2] !== 'empty') {
      this.winMessage = `${this.itemArray[2]} won`;
      this.disableBox();
    } else if (this.itemArray[0] === this.itemArray[4] && this.itemArray[0] === this.itemArray[8] && this.itemArray[0] !== 'empty') {
      this.winMessage = `${this.itemArray[0]} won`;
      this.disableBox();
    } else if (this.itemArray[2] === this.itemArray[4] && this.itemArray[2] === this.itemArray[6] && this.itemArray[2] !== 'empty') {
      this.winMessage = `${this.itemArray[2]} won`;
      this.disableBox();
    }
  }

}

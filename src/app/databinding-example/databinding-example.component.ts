import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-example',
  templateUrl: './databinding-example.component.html',
  styleUrls: ['./databinding-example.component.css']
})
export class DatabindingExampleComponent implements OnInit {
  userName = '';
  disableReset = false;
  constructor() { }

  ngOnInit() {
  }

  getIfUNEmpty() {
    if (this.userName === '') {
      return true;
    }
    return false;
  }

  onReset() {
    this.userName = '';
  }

}

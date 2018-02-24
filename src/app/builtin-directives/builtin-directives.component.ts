import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builtin-directives',
  templateUrl: './builtin-directives.component.html',
  styleUrls: ['./builtin-directives.component.css']
})
export class BuiltinDirectivesComponent implements OnInit {
  displayText = true;
  count = 0;
  buttonClicksArr = [];
  constructor() { }

  ngOnInit() {
  }

  clickAction() {
    this.displayText = !this.displayText;
    this.count++;
    this.buttonClicksArr.push(this.count);
  }

  getStyle(value) {
    if (value >= 5) {
      return 'blue';
    }
    return '';
  }

}

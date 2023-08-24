import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() color: string;
  @Input() text: string;
  @Output() btnClick = new EventEmitter();

  constructor(private router: Router) {}
  onClick() {
    this.btnClick.emit();
  }

 
}

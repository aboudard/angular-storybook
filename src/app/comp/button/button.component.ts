import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  label: string;

  @Input()
  color: string;

  @Input()
  size: string;

  @Output() btnClicked = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  clickBtn(): void {
    this.btnClicked.emit(true);
  }

}

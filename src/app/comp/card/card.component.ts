import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input()
  type = 'bg-light';

  @Input()
  typeText: string;

  @Input()
  header: string;

  @Input()
  title: string;

  @Input()
  content: string;

  @Output() btnClicked = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  clickBtn(): void {
    this.btnClicked.emit(true);
  }

}

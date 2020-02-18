import { Component, OnInit } from '@angular/core';
import { UtilsService } from './shared/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-storybook';

  constructor(private utilsService: UtilsService) { }

  ngOnInit() {
    this.utilsService.initFaIcons();
  }

  clickBtn(flag: boolean): void {
    console.log('test');
  }
}

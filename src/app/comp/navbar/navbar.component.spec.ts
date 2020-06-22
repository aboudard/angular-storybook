import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { By } from '@angular/platform-browser';
import { DebugElement, Component } from '@angular/core';
import { mockUser } from '../../shared/mock';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from 'src/app/dto/user';

@Component({
  selector: `app-host`,
  template: `<app-navbar [appTitle]="titleInput" [urlLogo]="urlInput" [user]="userInput"></app-navbar>`
})
class TestHostComponent {
  userInput: User;
  titleInput: string;
  urlInput: string;
}

describe('NavbarComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let badgeSpan: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TestHostComponent,
        NavbarComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    badgeSpan = fixture.debugElement.query(By.css('span#username'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should behave display mocked data', () => {
    component.userInput = mockUser;
    component.titleInput = 'Test';
    component.urlInput = '';
    fixture.detectChanges();
    expect(badgeSpan.nativeElement.innerText).toEqual(mockUser.badge);
  });
});

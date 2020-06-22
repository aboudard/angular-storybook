import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarUgComponent } from './navbar-ug.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

describe('NavbarUgComponent', () => {
  let component: NavbarUgComponent;
  let fixture: ComponentFixture<NavbarUgComponent>;
  let faIconLibrary: FaIconLibrary;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [NavbarUgComponent],
      providers: [FaIconLibrary]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarUgComponent);
    component = fixture.componentInstance;
    faIconLibrary = TestBed.inject(FaIconLibrary);
    faIconLibrary.addIcons(
      faPowerOff
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

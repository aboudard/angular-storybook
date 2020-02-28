import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarUgComponent } from './navbar-ug.component';

describe('NavbarUgComponent', () => {
  let component: NavbarUgComponent;
  let fixture: ComponentFixture<NavbarUgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarUgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarUgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

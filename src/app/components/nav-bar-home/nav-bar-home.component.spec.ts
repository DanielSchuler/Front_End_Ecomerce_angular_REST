import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarHomeComponent } from './nav-bar-home.component';

describe('NavBarHomeComponent', () => {
  let component: NavBarHomeComponent;
  let fixture: ComponentFixture<NavBarHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarHomeComponent]
    });
    fixture = TestBed.createComponent(NavBarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

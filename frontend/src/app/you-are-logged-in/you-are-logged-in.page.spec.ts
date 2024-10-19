import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YouAreLoggedInPage } from './you-are-logged-in.page';

describe('YouAreLoggedInPage', () => {
  let component: YouAreLoggedInPage;
  let fixture: ComponentFixture<YouAreLoggedInPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(YouAreLoggedInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

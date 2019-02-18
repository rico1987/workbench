import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutDesktopComponent } from './desktop.component';

describe('LayoutDesktopComponent', () => {
  let component: LayoutDesktopComponent;
  let fixture: ComponentFixture<LayoutDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

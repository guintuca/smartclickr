import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { MyApp } from './app.component';
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from '../../test-config/mocks-ionic';

describe('MyApp Component', () => {
  let fixture;
  let myapp;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyApp],
      imports: [
        IonicModule.forRoot(MyApp)
      ],
      providers: [
        { provide: StatusBar,    useClass: StatusBarMock    },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: Platform,     useClass: PlatformMock     }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp);
    myapp = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(myapp instanceof MyApp).toBe(true);
  });

  it('should have four pages', () => {
    expect(myapp.pages.length).toBe(4);
  });

  it('should have a menu link to "Login"', () => {
    expect(myapp.pages).toContain({title:"Login", component: LoginPage});
  });

});
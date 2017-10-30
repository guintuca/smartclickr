import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule, Platform, NavController} from 'ionic-angular/index';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PlatformMock, StatusBarMock, SplashScreenMock } from '../../../test-config/mocks-ionic';
import { HomePage } from './home';

describe('The Home page', () => {
  let comp: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(HomePage)
      ],
      providers: [
        NavController,
        { provide: Platform, useClass: PlatformMock},
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    comp = fixture.componentInstance;
  });

  it('should be defined', () => {
    expect(comp).toBeDefined();
  });

  it('should say "Welcome to SmartClickr!" at the top', () => {
    fixture.detectChanges();
    const h3 = HTMLImageElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(h3.innerText).toBe("Welcome to SmartClickr!");
  });

  xit('should have a button that says "Begin Poll"', () => {
    fixture.detectChanges();
    const btn: HTMLImageElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(btn.innerHTML).toBe('Begin Poll');
  });
});
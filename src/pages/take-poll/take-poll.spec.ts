import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { TakePollPage } from './take-poll';
import { IonicModule, Platform, NavController, NavParams } from 'ionic-angular/index';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PlatformMock, StatusBarMock, SplashScreenMock, NavMock } from '../../../test-config/mocks-ionic';
import { ApiProvider } from '../../providers/api/api';
import { Poll } from '../../models/poll';
import { Observable } from 'rxjs';

class APIMock {
  getPoll(code: string): Observable<Poll> {
    let poll: Poll = Object.assign( new Poll(), {
      _id: "somerandomid",
      name: "My Test Poll",
      creator: {
        _id: "somerandompersonid",
        first_name: "John",
        last_name: "Doe"
      },
      description: "This is a test poll to see if our app works.",
      questions: [
        {
          _id: "somequestionid",
          order: 1,
          stem: "What is your name?",
          type: "text"
        },
        {
          _id: "somequestionid2",
          order: 2,
          stem: "Is today Tuesday?",
          type: "mc",
          choices: [
            {
              order: 1,
              text: "Yes"
            },
            {
              order: 2,
              text: "No"
            }
          ]
        },
        {
          _id: "somequestionid3",
          order: 3,
          stem: "How old are you?",
          type: "numeric"
        }
      ]
    });
    return Observable.of(poll);
  }
}

class ParamMock {
  get(param: string): string {
    if ('session_code' == param ) {
      return 'WtSO';
    } 
  }
}



describe('The Take Poll page', () => {
  let de: DebugElement;
  let comp: TakePollPage;
  let fixture: ComponentFixture<TakePollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TakePollPage],
      imports: [
        IonicModule.forRoot(TakePollPage)
      ],
      providers: [
        NavController,
        { provide: Platform, useClass: PlatformMock},
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: ApiProvider, useClass: APIMock },
        { provide: NavParams, useClass: ParamMock },
        { provide: NavController, useClass: NavMock }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakePollPage);
    comp = fixture.componentInstance;
    // de = fixture.debugElement.query(By.css('h3'));
  });

  it('should be defined', () => {
    expect(comp).toBeDefined();
  });

  it('should receive a session_code from navParams', () => {
    let code = comp.params.get('session_code');
    expect(code).toBeDefined();
    expect(code).toBe('WtSO');
  });

  it('should get a Poll back from the API', async(() => {
    let code = comp.params.get('session_code');
    let poll: Poll;
    comp.api.getPoll(code).subscribe(
      (p: Poll) => {
        expect(p instanceof Poll).toBe(true);
      }
    )
  }));

  // it('should say "Welcome to SmartClickr!" at the top', () => {
  //   fixture.detectChanges();
  //   const h3 = de.nativeElement;
  //   expect(h3.innerText).toBe("Welcome to SmartClickr!");
  // });

  // it('should have a button that says "Toggle Menu"', () => {
  //   fixture.detectChanges();
  //   const btn: HTMLImageElement = fixture.debugElement.query(By.css('button')).nativeElement;
  //   expect(btn.innerHTML).toBe('Toggle Menu');
  // });
});
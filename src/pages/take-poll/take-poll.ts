import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Poll } from '../../models/poll';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the TakePollPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-take-poll',
  templateUrl: 'take-poll.html',
})
export class TakePollPage {

  private poll: Poll;

  constructor(
    public nav: NavController,
    public params: NavParams,
    public api: ApiProvider
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TakePollPage');
  }

  ionViewDidEnter() {
    let code = this.params.get('session_code');
    this.api.getPoll(code).subscribe(
      (p: Poll) => {
        this.poll = p;
      }
    );

  }

}

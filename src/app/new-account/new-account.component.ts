import { Component, OnInit} from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.services';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
//  providers: [LoggingService  ]
})
export class NewAccountComponent implements OnInit {
  constructor(
    private loggingService: LoggingService,
    private accountsServices: AccountService
    ) {
      this.accountsServices.statusUpdated.subscribe(
        (status: string) => alert('New Status: ' + status)
      );
    }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsServices.addAccount(accountName, accountStatus);
 //   this.loggingService.logStatusChange(accountStatus);
  }
  ngOnInit() {

  }
}

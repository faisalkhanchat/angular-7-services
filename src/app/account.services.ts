
import { Injectable , EventEmitter} from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountService {
    accounts = [
        {
          name: 'Master Account',
          status: 'Active'
        },
        {
          name: 'Testaccount',
          status: 'InActive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      constructor(private logginService: LoggingService) {
      }
      statusUpdated = new EventEmitter<string>();

      addAccount(name: string, status: string) {
        this.accounts.push({ name: name, status: status });
        this.logginService.logStatusChange(status);
      }
      updateStatus( id: number, status: string ) {
        this.accounts[id].status = status;
        this.logginService.logStatusChange(status);
      }
// tslint:disable-next-line:eofline
}
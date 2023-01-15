import { Component } from '@angular/core';
import { WalletService } from 'src/app/services/wallet.service';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent {

  public walletConnected: boolean = false;
  public walletId: string = '';
  
  constructor(private walletService: WalletService){

  }

  connectToWallet  = () => {
    this.walletService.connectWallet();
  }

  checkWalletConnected = async () => {
    const accounts = await this.walletService.checkWalletConnected();
    if(accounts.length > 0){
      this.walletConnected = true;
      this.walletId = accounts[0];
    }
  }

  ngOnInit(): void {
    this.checkWalletConnected();
  }
}

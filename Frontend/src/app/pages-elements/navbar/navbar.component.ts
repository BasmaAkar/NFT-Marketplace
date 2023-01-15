import { Component } from '@angular/core';
import { WalletService } from 'src/app/services/wallet.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

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

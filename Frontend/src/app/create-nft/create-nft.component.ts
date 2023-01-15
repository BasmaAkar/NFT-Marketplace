import { Component } from '@angular/core';
import { NFT } from '../nft';
import { NFTServiceService } from '../services/nft-service.service';
import { Router } from '@angular/router';
import { WalletService } from 'src/app/services/wallet.service';



@Component({
  selector: 'app-create-nft',
  templateUrl: './create-nft.component.html',
  styleUrls: ['./create-nft.component.css']
})
export class CreateNftComponent {
  nft: NFT = new NFT()
  

  constructor(private nftService: NFTServiceService, private router: Router) { }

  ngOnInit(): void {
  }


  saveNFT() {
    this.nftService.createNFT(this.nft).subscribe(data => {
      console.log(data);
      this.goToNFTList();
    },
      error => console.log(error));
  }

  goToNFTList() {
    this.router.navigate(['/show-nft']);
  }

  onSubmit() {
    console.log(this.nft);
    this.saveNFT();
  }

  
}

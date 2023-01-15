import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NFT } from 'src/app/nft';
import { NFTServiceService } from 'src/app/services/nft-service.service';

@Component({
  selector: 'app-nature',
  templateUrl: './nature.component.html',
  styleUrls: ['./nature.component.css']
})
export class NatureComponent {

  nfts !: NFT[];

  constructor(private nftService: NFTServiceService, private router: Router) { }


  ngOnInit(): void {
    this.getNFTs();
  }

  private getNFTs(){
    this.nftService.getAllNFTs().subscribe(data => {
      this.nfts=data;
    })
  }
}

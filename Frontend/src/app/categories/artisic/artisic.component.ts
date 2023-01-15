import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NFT } from 'src/app/nft';
import { NFTServiceService } from 'src/app/services/nft-service.service';

@Component({
  selector: 'app-artisic',
  templateUrl: './artisic.component.html',
  styleUrls: ['./artisic.component.css']
})
export class ArtisicComponent {

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

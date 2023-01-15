import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NFT } from '../nft';
import { NFTServiceService } from '../services/nft-service.service';

@Component({
  selector: 'app-show-nft',
  templateUrl: './show-nft.component.html',
  styleUrls: ['./show-nft.component.css']
})
export class ShowNftComponent {

  nfts !: NFT[];

  constructor( private nftService: NFTServiceService, private router: Router){}

  ngOnInit(): void {
    this.getNFTs();
  }

  private getNFTs(){
    this.nftService.getAllNFTs().subscribe(data => {
      this.nfts=data;
    })
  }

  updateNFT(id: number){
    this.router.navigate(['edit-nft', id]);
 }

 deleteNFT(id: number){
   this.nftService.deleteNFT(id).subscribe( data =>{
     console.log(data);
     this.getNFTs();
   })
 }

}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NFT } from '../nft';
import { NFTServiceService } from '../services/nft-service.service';

@Component({
  selector: 'app-edit-nft',
  templateUrl: './edit-nft.component.html',
  styleUrls: ['./edit-nft.component.css']
})
export class EditNftComponent {

  nft: NFT =new NFT();
  id !: number;

  constructor(private nftService: NFTServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.nftService.getNFTById(this.id).subscribe(data => {
      this.nft = data;
    },
      error => console.log(error));
  }

  onSubmit() {
    this.nftService.editNFT(this.id, this.nft).subscribe(data => {
      this.goToNFTList();
    }
      , error => console.log(error));
  }

  goToNFTList(){
    this.router.navigate(['/show-nft']);
  }

}

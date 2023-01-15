import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NFT } from '../nft';

@Injectable({
  providedIn: 'root'
})
export class NFTServiceService {

  public url = "http://localhost:8082/nft/nfts";

  constructor(private httpClient: HttpClient) { }

  getAllNFTs(): Observable<NFT[]> {
    return this.httpClient.get<NFT[]>(`${this.url}`);
  }

  createNFT(nft: NFT): Observable<Object> {
    return this.httpClient.post(`${this.url}`, nft);
  }

  getNFTById(id: number): Observable<NFT> {
    return this.httpClient.get<NFT>(`${this.url}/${id}`);
  }

  editNFT(id: number, nft: NFT): Observable<Object> {
    return this.httpClient.put(`${this.url}/${id}`, nft);
  }

  deleteNFT(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}

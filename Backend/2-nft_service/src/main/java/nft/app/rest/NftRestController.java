package nft.app.rest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import nft.app.exception.ResourceNotFoundException;
import nft.app.entities.NFT;
import nft.app.repositories.NftRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/nft")
public class NftRestController {

	@Autowired
	private NftRepository nftRepository;
	
	@PostMapping("/nfts")
	public NFT saveNft(@RequestBody NFT nft) {
		return nftRepository.save(nft);
	}

	@GetMapping("/nfts")
	public List<NFT> getAllNfts(){
		return nftRepository.findAll();
	}
	
	@GetMapping("/nfts/{id}")
	public ResponseEntity<Optional<NFT>> getNftById(@PathVariable Long id) {
		Optional<NFT> nft = nftRepository.findById(id);
		return ResponseEntity.ok(nft);
	}
	
	@PutMapping("/nfts/{id}")
	public ResponseEntity<NFT> updateNft(@PathVariable Long id, @RequestBody NFT nftDetails){
		NFT nft = nftRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("nft not exist with id :" + id));
		
		nft.setNom_nft(nftDetails.getNom_nft());
		nft.setDescription(nftDetails.getDescription());
		nft.setPrix(nftDetails.getPrix());
		nft.setImage(nftDetails.getImage());
		
		NFT updatedNft = nftRepository.save(nft);
		return ResponseEntity.ok(updatedNft);
	}

	@DeleteMapping("/nfts/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteNft(@PathVariable Long id){
		NFT nft = nftRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("nft not exist with id :" + id));
		
		nftRepository.delete(nft);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	@RequestMapping(value="/checherNFT",method=RequestMethod.GET) 
	public Page<NFT> chercher(
	@RequestParam(name="mc",defaultValue="") String mc ,
	@RequestParam(name="page",defaultValue="0")  int page ,
	@RequestParam(name="size",defaultValue="5")  int size) 
	{ 
	return nftRepository.chercher("%"+mc+"%", PageRequest.of(page,size));}
		

}

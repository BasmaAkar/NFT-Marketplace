package cat.app.rest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import cat.app.exception.ResourceNotFoundException;
import cat.app.entities.Categorie;
import cat.app.repositories.CategorieRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/cat")
public class CategorieRestController {

	@Autowired
	private CategorieRepository categorieRepository;
	
	@GetMapping("/categories")
	public List<Categorie> getAllCategories(){
		return categorieRepository.findAll();
	}
	
	@PostMapping("/categories")
	public Categorie saveCat(@RequestBody Categorie categorie) {
		return categorieRepository.save(categorie);
	}
	
	@GetMapping("/categories/{id}")
	public ResponseEntity<Optional<Categorie>> getCatById(@PathVariable Long id) {
		Optional<Categorie> cat = categorieRepository.findById(id);
		return ResponseEntity.ok(cat);
	}
	
	@PutMapping("/categories/{id}")
	public ResponseEntity<Categorie> updateCat(@PathVariable Long id, @RequestBody Categorie catDetails){
		Categorie categorie = categorieRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("category not exist with id :" + id));
		
		categorie.setNom_cat(catDetails.getNom_cat());
		
		Categorie updatedCat = categorieRepository.save(categorie);
		return ResponseEntity.ok(updatedCat);
	}
	
	
	@DeleteMapping("/categories/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteCat(@PathVariable Long id){
		Categorie categorie = categorieRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("category not exist with id :" + id));
		
		categorieRepository.delete(categorie);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}

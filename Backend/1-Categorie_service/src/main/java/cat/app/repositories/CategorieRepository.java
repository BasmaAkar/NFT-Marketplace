package cat.app.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import cat.app.entities.Categorie;

@Repository
public interface CategorieRepository extends  MongoRepository<Categorie, Long>{

}

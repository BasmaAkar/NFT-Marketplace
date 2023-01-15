package nft.app.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import nft.app.entities.NFT;

@Repository
public interface NftRepository extends MongoRepository<NFT,Long>{

	@Query("select c from NFT c where c.cat like :x")
	public Page<NFT> chercher(@Param ("x")String mc ,Pageable pageable);
}

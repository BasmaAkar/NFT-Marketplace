package nft.app.entities;

import java.io.Serializable;
import java.util.Arrays;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("NFT")
public class NFT implements Serializable{

	@Id
	private long id_nft;
	private String nom_nft;
	private String description;
	private double prix;
	private String image;
	private String cat;

	public NFT() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public NFT(long id_nft, String nom_nft, String description, double prix, String image, String cat) {
		super();
		this.id_nft = id_nft;
		this.nom_nft = nom_nft;
		this.description = description;
		this.prix = prix;
		this.image = image;
		this.cat=cat;
	}

	public String getCat() {
		return cat;
	}

	public void setCat(String cat) {
		this.cat = cat;
	}

	public long getId_nft() {
		return id_nft;
	}

	public void setId_nft(long id_nft) {
		this.id_nft = id_nft;
	}

	public String getNom_nft() {
		return nom_nft;
	}

	public void setNom_nft(String nom_nft) {
		this.nom_nft = nom_nft;
	}


	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getPrix() {
		return prix;
	}

	public void setPrix(double prix) {
		this.prix = prix;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "NFT [id_nft=" + id_nft + ", nom_nft=" + nom_nft + ", description=" + description
				+ ", prix=" + prix + ", image=" + image + "]";
	}
	
}

package nft.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;

@EnableDiscoveryClient
@SpringBootApplication
public class NftApplication {

	@LoadBalanced
	public static void main(String[] args) {
		SpringApplication.run(NftApplication.class, args);
	}

}

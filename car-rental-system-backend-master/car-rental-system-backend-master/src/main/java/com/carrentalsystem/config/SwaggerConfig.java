package com.carrentalsystem.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;

@Configuration
public class SwaggerConfig {

 // Access Swagger UI at: http://localhost:8080/swagger-ui/index.html

 @Bean
 public OpenAPI carRenatalOpenAPI() {
  final String securitySchemeName = "bearerAuth";

  return new OpenAPI()
    .info(new Info()
      .title("Car Rental System Application")
      .description("Car Rental Application using Spring Boot 3")
      .version("v0.0.1")
      .license(new License().name("Apache 2.0").url("https://www.apache.org/licenses/LICENSE-2.0")))
    .addSecurityItem(new SecurityRequirement().addList(securitySchemeName))
    .components(new Components()
      .addSecuritySchemes(securitySchemeName,
        new SecurityScheme()
          .name(securitySchemeName)
          .type(SecurityScheme.Type.HTTP)
          .scheme("bearer")
          .bearerFormat("JWT")));
 }
}

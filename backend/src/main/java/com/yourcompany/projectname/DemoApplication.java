package com.yourcompany.projectname;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@SpringBootApplication
public class DemoApplication {

  public static void main(String[] args) {
    SpringApplication.run(DemoApplication.class, args);
  }

  @RestController
  class HelloController {
    @GetMapping("/api/hello")
    public Map<String, String> hello() {
      Map<String, String> response = new HashMap<>();
      response.put("message", "Hello from Spring Boot!");
      return response;
    }
  }
}

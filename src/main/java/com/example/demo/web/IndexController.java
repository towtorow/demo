package com.example.demo.web;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.reactive.function.client.WebClient;

@Controller
public class IndexController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    @GetMapping("/urlInfo")
    @ResponseBody
    public String urlInfo(@RequestParam(value = "url") String url) {
        if(url.contains("www.youtube.com")){
            WebClient client = WebClient.builder()
                    .baseUrl("https://www.youtube.com")
                    .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                    .build();
            return client.get().uri(uriBuilder -> uriBuilder.path("/oembed")
                    .queryParam("url", url)
                    .queryParam("format", "json").build()).retrieve().bodyToMono(String.class).block();
        }else if(url.contains("twitter.com")){
            WebClient client = WebClient.builder()
                    .baseUrl("https://publish.twitter.com")
                    .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                    .build();
            return client.get().uri(uriBuilder -> uriBuilder.path("/oembed")
                    .queryParam("url", url).build()).retrieve().bodyToMono(String.class).block();
        }else if(url.contains("vimeo.com")){
            WebClient client = WebClient.builder()
                    .baseUrl("https://vimeo.com")
                    .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                    .build();
            return client.get().uri(uriBuilder -> uriBuilder.path("/api/oembed.json")
                    .queryParam("url", url).build()).retrieve().bodyToMono(String.class).block();

        }

        return "{\"errorMsg\" : \"invalid Param\"}";
    }
}

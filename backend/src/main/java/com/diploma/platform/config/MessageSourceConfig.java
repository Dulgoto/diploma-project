package com.diploma.platform.config;

import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ResourceBundleMessageSource;

@Configuration
public class MessageSourceConfig {

    @Bean
    public MessageSource messageSource() {
        ResourceBundleMessageSource ms = new ResourceBundleMessageSource();
        ms.setBasenames("messages", "ValidationMessages");
        ms.setDefaultEncoding("UTF-8");
        ms.setFallbackToSystemLocale(false); // do not use OS locale
        return ms;
    }
}

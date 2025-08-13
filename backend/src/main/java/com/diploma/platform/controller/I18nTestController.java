package com.diploma.platform.controller;

import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class I18nTestController {

    private final MessageSource messageSource;

    public I18nTestController(MessageSource messageSource) {
        this.messageSource = messageSource;
    }

    @GetMapping("/api/i18n/example")
    public Map<String, String> example() {
        String msg = messageSource.getMessage("greeting", null, LocaleContextHolder.getLocale());
        return Map.of("message", msg);
    }
}

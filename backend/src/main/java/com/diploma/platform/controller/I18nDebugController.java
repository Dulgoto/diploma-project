package com.diploma.platform.controller;

import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.Locale;
import java.util.Map;

@RestController
public class I18nDebugController {

    private final MessageSource messageSource;

    public I18nDebugController(MessageSource messageSource) {
        this.messageSource = messageSource;
    }

    @GetMapping("/api/i18n/locale")
    public Map<String, Object> locale(@RequestHeader(value = "Accept-Language", required = false) String acceptLanguage) {
        Locale loc = LocaleContextHolder.getLocale();
        String msg = messageSource.getMessage("greeting", null, loc);
        return Map.of(
            "locale", loc.toString(),
            "acceptLanguage", acceptLanguage,
            "message", msg
        );
    }
}

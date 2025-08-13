# Backend - Spring Boot Приложение

Бекенд за дипломния проект **Платформа за онлайн обяви и услуги**.

## Функционалност
- REST API за управление на ресурсите 
## Технологии
- **Java 21**, **Spring Boot 3**
- **Gradle**
- **Spring Web**, **Spring Data JPA**, **Spring Security**
- **MySQL 8**
- **Validation (Jakarta)**, **Actuator**, **Lombok**
- **I18n**:Български и английски

## Изисквания
- JDK 21
- MySQL 8 (работеща на `localhost:3306`)
- IntelliJ IDEA или терминал с Gradle wrapper


## Конфигурация
Файл: `src/main/resources/application.properties`
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/diploma_db?createDatabaseIfNotExist=true&useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC&useUnicode=true&characterEncoding=utf8
spring.datasource.username=root
spring.datasource.password=ВАШАТА_ПАРОЛА

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

server.port=8080
spring.messages.basename=messages,ValidationMessages
spring.messages.encoding=UTF-8
```

## Стартиране

### От IntelliJ
- Отворете проекта и стартирайте класа `BackendApplication`.

### От терминал (в папка `backend/`)
- Windows:
```bat
- .\gradlew.bat bootRun
```


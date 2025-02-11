## Configuration
### Database Source
The database source can be changed in the file:

demo/src/main/resources/application.properties.

### Persisting Data in the Database
If you want to persist data between application restarts, change:

spring.jpa.hibernate.ddl-auto=create-drop

to:

spring.jpa.hibernate.ddl-auto=update

### Initial Tasks for Testing
The application starts with four predefined tasks for testing purposes. These tasks are configured in:

demo/src/main/java/com/example/demo/configuration/TaskConfig.java.

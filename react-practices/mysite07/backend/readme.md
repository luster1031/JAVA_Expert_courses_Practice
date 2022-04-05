## MySite SpringBoot Backend Integrated with React Frontend

#### 빌드
```bash
$ mvn -f ./backend exec:exec clean package
```

#### 실행
```bash
$ java -Dspring.profiles.active=production -jar MySite07.jar
```



### path
```java
	private static String SAVE_PATH = "D:/mysite-uploads/gallery";
	private static String URL_BASE = "/assets/gallery";	
```
```yml
    mvc:
        # path pattern used for static resources
        static-path-pattern: /assets/**

        
        # whether a "NoHandlerFoundException" should be thrown if no handler was found to process a request
        
        throw-exception-if-no-handler-found: true
    web:
        resources:
            # locations of static resources
            static-locations: classpath:/static/, file:D:/mysite-uploads/
```
+ frontend는 /assets/가 없어서
```js
proxy: {
            '/api': 'http://localhost:8080',
            '/assets/gallery': 'http://localhost:8080'
        },
```
+ proxy 추가
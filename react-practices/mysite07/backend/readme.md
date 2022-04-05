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


### Transaction
+ backend
    ```java
    @Transactional
    //	둘다 성공해야, 두개의 sql이 반영이 됨
    public boolean deleteMessage(Long no, String password) {
        GuestbookVo vo = new GuestbookVo();
        vo.setNo(no);
        vo.setPassword(password);
        
        guestbookRepository.delete(vo);
        
        vo.setNo(null);
        vo.setName("임한나");
        vo.setMessage("테스트");
        vo.setPassword("1234");
        guestbookRepository.insert(vo);
        return true;
    }
    ```
    + delete, insert 둘 다 성공하면 둘 다 반영이 됨,
    + 하나라도 실패하면 반영이 안 됨.
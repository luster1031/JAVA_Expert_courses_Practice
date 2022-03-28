+ 표기법 바꿔주기

```xml
<settings>
	<setting name="mapUnderscoreToCamelCase" value="true" />
</settings>
```

+ lombok
	+ 라이브러리 추가
	
	```xml
		<dependency>
			<groupId>org.projectlombok</groupId>
			<artifactId>lombok</artifactId>
			<optional>true</optional>
		</dependency>
			
		
		<configuration>
				<excludes>
					<exclude>
						<groupId>org.projectlombok</groupId>
						<artifactId>lombok</artifactId>
					</exclude>
				</excludes>
			</configuration>
	```
	
	+ 확인
		`C:\Users\BIT\.m2\repository\org\projectlombok\lombok\1.18.22\lombok-1.18.22.jar`실행
		+ ![image](https://user-images.githubusercontent.com/61460836/160311724-9597d939-347b-4954-afa6-be62229010fc.png)
		+ SpringToolSuite4.ini 설치

+ @Slf4j
	+ logging 추가
		```yaml
		---
		#logging
		logging:
		level:
			root: WARN


		```
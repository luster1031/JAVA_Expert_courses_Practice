api test

code(서버X)
spring junit test intergration:controller:MockMVC

tool(서버o)
postman, talend API(Chrome Plug-in)

```
{
	"result":
	"data":
	"message":
}
```

+ 응답할 때 
	+ 데이터를 꼭 보내야함
	+ 백엔드에서 에러가나도 보내긴 해야함
	 
```
{
	"result":"success"or "fail"
	"data": [{},{}]
	"message":null
}
```

### XML message converter
1. Marchalling
	+ 데이터(Object)를 Xml 만드는 것
2. Unmarchalling
	+ xml 데이터를 데이터 형태(Object)로 만드는 것
3. java 지원
	1. OXM (Object Xml Mapping)
		+ XML 데이터와 객체를 매핑
		+ MarshallingHttpMessageConverter
	2. JAXB(Java Architecture for XML Binding)
		+ OXM를 쉽게 도와 주는 Tool
		+ 마샬링/ 언마샬링을 Annotation 기반으로 한다. 
		+ JAXBAnnotation(@XmlRootElement)를 사용해서 직관적으로 매핑한다.
		+ Jaxb2RootElementHttpMessageConverter
	```xml
	<bean class="org.springframework.http.converter.xml.Jaxb2RootElementHttpMessageConverter">
		<property name="supportedMediaTypes">
			<list>
				<value>application/xml; charset=UTF-8</value>
			</list>
		</property>
	</bean>
	```
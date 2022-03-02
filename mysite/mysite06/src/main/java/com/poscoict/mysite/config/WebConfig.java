package com.poscoict.mysite.config;

import java.nio.charset.Charset;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.poscoict.mysite.interceptor.SiteInterceptor;
import com.poscoict.mysite.security.AuthInterceptor;
import com.poscoict.mysite.security.AuthUserHandlerMethodArgumentResolver;
import com.poscoict.mysite.security.LoginInterceptor;
import com.poscoict.mysite.security.LogoutInterceptor;

@SpringBootApplication
@PropertySource("classpath:com/poscoict/mysite/config/WebConfig.properties")
public class WebConfig implements WebMvcConfigurer {
	@Autowired
	private Environment env;
	
	// ArgumentResolver
	@Bean
	public HandlerMethodArgumentResolver handlerMethodArgumentResolver() {
		return new AuthUserHandlerMethodArgumentResolver();
	}
	
	@Override
	public void addArgumentResolvers(List<HandlerMethodArgumentResolver> argumentResolvers) {
		argumentResolvers.add(handlerMethodArgumentResolver());
	}
	
//	Interceptors
	@Bean
	public HandlerInterceptor loginInterceptor() {
		return new LoginInterceptor();
	}
	
	@Bean
	public HandlerInterceptor logoutInterceptor() {
		return new LogoutInterceptor();
	}
	@Bean
	public HandlerInterceptor authInterceptor() {
		return new AuthInterceptor();
	}
	@Bean
	public HandlerInterceptor siteInterceptor() {
		return new SiteInterceptor();
	}

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry
			.addInterceptor(loginInterceptor())
			.addPathPatterns("/user/auth");
		registry
			.addInterceptor(logoutInterceptor())
			.addPathPatterns("/user/logout");
		
		registry
			.addInterceptor(siteInterceptor())
			.addPathPatterns("/**")
			.excludePathPatterns("/images/**");
		
		registry
			.addInterceptor(authInterceptor())
			.addPathPatterns("/**")
			.excludePathPatterns("/user/auth")
			.excludePathPatterns("/user/logout")
			.excludePathPatterns("/assets/**")
			.excludePathPatterns("/images/**");

	}
	
	// 	Message Converter 추가 -> 2022.03.02
		//	html(text) message converter
	@Bean
	public StringHttpMessageConverter stringHttpMessageConverter() {
		StringHttpMessageConverter messageConverter = new StringHttpMessageConverter();
		
		//	supportedMediaTypes
		//	List<MediaType> list = new ArrayList<>();
		//	list.add(new MediaType("text","html",Charset.forName("utf-8")));
		
		
		messageConverter.setSupportedMediaTypes(
				Arrays.asList(
						new MediaType("text","html",Charset.forName("utf-8"))
				)
		);	
		return messageConverter;
	}
	
		//	JSON message converter
	@Bean
	public MappingJackson2HttpMessageConverter mappingJackson2HttpMessageConverter() {
		//	Mapper를 build형식으로 만드는 것 -> 옵션이 많아서
			//	들여쓰기 할 것이냐 -> indentOutput
			//	data객체 우찌 할 거냐 -> dateFormat
		Jackson2ObjectMapperBuilder builder = new Jackson2ObjectMapperBuilder()
				.indentOutput(true)
				.dateFormat(new SimpleDateFormat("yyy-mm-dd")); 
		
		MappingJackson2HttpMessageConverter messageConverter = new MappingJackson2HttpMessageConverter(builder.build());
		
		messageConverter.setSupportedMediaTypes(
				Arrays.asList(
						new MediaType("application","json",Charset.forName("utf-8"))
				)
		);	
		return messageConverter;
	}
	
	
	
	//	<mvc:message-converters>
	@Override
	public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
		converters.add(stringHttpMessageConverter());
		converters.add(mappingJackson2HttpMessageConverter());
	}
	
	// Resource Mapping
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/images/**").addResourceLocations("file:/upload-images/");
		//env.getProperty("fileupload.resourceMapping")
	// + env.getProperty("fileupload.uploadLocation")
		
		registry
		.addResourceHandler(env.getProperty("assets.assetsMapping"))
		.addResourceLocations("classpath:" + env.getProperty("assets.assetsLocation"));

	}
}

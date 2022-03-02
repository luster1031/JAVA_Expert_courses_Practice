package com.poscoict.config.web;

import java.nio.charset.Charset;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;

@Configuration
@EnableWebMvc
@PropertySource("classpath:com/poscoict/mysite/config/web/css.properties")
public class MvcConfig extends WebMvcConfigurerAdapter {
	@Autowired
	private Environment env;

	// View Resolver 설정
	@Bean
	public ViewResolver viewResolver() {
		InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
		viewResolver.setViewClass(JstlView.class);
		viewResolver.setPrefix("/WEB-INF/views/");
		viewResolver.setSuffix(".jsp");
		return viewResolver;
	}

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler(env.getProperty("css.resourceHandler"))
				.addResourceLocations(env.getProperty("css.resourceLocations"));
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

//	//	DefaultServlet Handler 
//	@Override
//	public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
//		configurer.enable();
//	}

}

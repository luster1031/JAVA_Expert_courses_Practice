package com.poscoict.config.web;

import java.util.List;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.poscoict.jblog.security.AuthUserHandlerMethodArgumentResolver;
import com.poscoict.jblog.security.BlogInterceptor;
import com.poscoict.jblog.security.LoginInterceptor;
import com.poscoict.jblog.security.LogoutInterceptor;

@Configuration
public class SecurityConfig extends WebMvcConfigurerAdapter {
	// Argument Resolver
	@Bean
	public HandlerMethodArgumentResolver handlerMethodArgumentResolver() {
		return new AuthUserHandlerMethodArgumentResolver();
	}

	@Override
	public void addArgumentResolvers(List<HandlerMethodArgumentResolver> argumentResolvers) {
		argumentResolvers.add(handlerMethodArgumentResolver());
	}

	@Bean
	public HandlerInterceptor loginInterceptor() {
		return new LoginInterceptor();
	}

	@Bean
	public HandlerInterceptor logoutInterceptor() {
		return new LogoutInterceptor();
	}

	@Bean
	public HandlerInterceptor blogInterceptor() {
		return new BlogInterceptor();
	}

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(loginInterceptor()).addPathPatterns("/user/auth");
		registry.addInterceptor(logoutInterceptor()).addPathPatterns("/user/logout");
		registry.addInterceptor(blogInterceptor()).addPathPatterns("/jblog/**");
	}
}

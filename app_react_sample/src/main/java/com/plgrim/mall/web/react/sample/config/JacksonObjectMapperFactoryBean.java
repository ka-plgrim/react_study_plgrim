package com.plgrim.mall.web.react.sample.config;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ser.DefaultSerializerProvider;
import org.springframework.beans.factory.FactoryBean;

import java.text.SimpleDateFormat;

/**
 * MappingJackson2JsonView 생성 시 ObjectMapper를 injection 한다.
 * 
 * <p>
 * 
 * <ul>
 *   <li> [기능1]
 *   <li> [기능2]
 * </ul>.
 *
 * @author Plgrim
 * @since 2015
 */
public class JacksonObjectMapperFactoryBean implements FactoryBean<ObjectMapper> {

	/**
	 * MappingJackson2JsonView에서 사용할 ObjectMapper를 생성 한다 .
	 *
	 * @return Object mapper [설명]
	 * @throws Exception the exception
	 * @since 2015
	 */
	public static ObjectMapper createObjectMapper() throws Exception {
		ObjectMapper objectMapper = new ObjectMapper();
		objectMapper.setSerializationInclusion(Include.ALWAYS);

		DefaultSerializerProvider provider = new DefaultSerializerProvider.Impl();
		provider.setNullValueSerializer(new NullSerializer());
		objectMapper.setSerializerProvider(provider);
		
		/** Bug fix customize (대소문자 변환) */
		objectMapper.configure(MapperFeature.USE_STD_BEAN_NAMING, true);
		objectMapper.setPropertyNamingStrategy(CustomizePropertyNamingStrategy.CASE_TO_CAMEL_CASE);
		objectMapper.setDateFormat(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"));
		return objectMapper;
	}

	@Override
	public ObjectMapper getObject() throws Exception {
		return createObjectMapper();
	}

	@Override
	public Class<?> getObjectType() {
		return ObjectMapper.class;
	}
	
}

/* Copyright (c) 2015 Plgrim, Inc.
 * All right reserved.
 * http://plgrim.com
 * This software is the confidential and proprietary information of Plgrim
 * , Inc. You shall not disclose such Confidential Information and
 * shall use it only in accordance with the terms of the license agreement
 * you entered into with Plgrim.
 *
 * ------------------------------------------------------------------------
 * @author Plgrim
 * @since 2015
 */
package com.plgrim.mall.web.react.sample.config;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.PropertyNamingStrategy.PascalCaseStrategy;

/**
 * 
 * Json Bug fix
 * ex) sTrndNm  --> trndNm
 * 
 * fixed
 * ex) sTrndNm  --> sTrndNm 
 * 
 * USE_STD_BEAN_NAMING 후에 사용
 *
 * @author Plgrim
 * @since 2015
 */
public class CustomizePropertyNamingStrategy extends PascalCaseStrategy{

	private static final long serialVersionUID = 258899053741113932L;
	
	public static final PropertyNamingStrategy CASE_TO_CAMEL_CASE = new CustomizePropertyNamingStrategy();

	@Override
    public String translate(String input) {
        if (input == null || input.length() == 0){
            return input; // garbage in, garbage out
        }
        // Replace first upper-case letter with lower-case equivalent
        char c = input.charAt(0);
        char uc = Character.toLowerCase(c);
        if (c == uc) {
            return input;
        }
        StringBuilder sb = new StringBuilder(input);
        sb.setCharAt(0, uc);
        return sb.toString();
    }
}

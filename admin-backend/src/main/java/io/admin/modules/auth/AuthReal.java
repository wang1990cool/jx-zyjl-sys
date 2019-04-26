package io.admin.modules.auth;


import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.apache.oltu.oauth2.client.OAuthClient;
import org.apache.oltu.oauth2.client.URLConnectionClient;
import org.apache.oltu.oauth2.client.request.OAuthBearerClientRequest;
import org.apache.oltu.oauth2.client.request.OAuthClientRequest;
import org.apache.oltu.oauth2.client.response.OAuthAccessTokenResponse;
import org.apache.oltu.oauth2.client.response.OAuthResourceResponse;
import org.apache.oltu.oauth2.common.OAuth;
import org.apache.oltu.oauth2.common.exception.OAuthProblemException;
import org.apache.oltu.oauth2.common.exception.OAuthSystemException;
import org.apache.oltu.oauth2.common.message.types.GrantType;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping(value = "/callback")
public class AuthReal {

/*
    //服务器ip
    String ip = "http://127.0.0.1:8080";
    //oauth clientId
    String clientId = "5cb7d6f774292964d41af700.abc";
    // oauth clientSecret
    String clientSecret = "m-zrtgOzQAG_4drfb92QigpPLvkWeHNxS589PfIO59E";

    String myscope ="all";
    String mystate = "default_state";
    String TiupURl = "https://tiup.tiup.cn";
*/

    //服务器ip
    String ip = "http://172.17.1.48:8080";
    //oauth clientId
    String clientId = "5cb7d6f774292964d41af700.abc";
    // oauth clientSecret
    String clientSecret = "m-zrtgOzQAG_4drfb92QigpPLvkWeHNxS589PfIO59E";

    String myscope ="all";
    String mystate = "default_state";
    String TiupURl = "https://i.abc.edu.cn";

    //oauth code 地址
    String codeUrl = TiupURl+"/oauth2/authorize?response_type=code&scope="+myscope+"&state="+mystate+"&client_id="+clientId+"&redirect_uri="+ip+"/callback/callbackCode";
    // 返回路径
    String redirectUrl = ip+"/callback/accessToken";
    String response_type = null;
    String code = null;
    //服务器端获取 Access Token
    //
    // token 地址
    String accessTokenUrl = TiupURl+"/oauth2/token";
    //获取用户数据的api
    String userInfoUrl = TiupURl+"/apis/oauth2/v1/profile";

    // 提交申请code的请求
    @ExceptionHandler
    @RequestMapping( value="/requestServerCode")
    public String requestServerFirst(HttpServletRequest request, HttpServletResponse response) throws OAuthProblemException {
        response_type = "code";

        OAuthClient oAuthClient = new OAuthClient(new URLConnectionClient());
        String redirectUrl = null;
        try {
            // 构建oauthd的请求。设置请求服务地址（accessTokenUrl）、clientId、response_type、redirectUrl
            OAuthClientRequest accessTokenRequest = OAuthClientRequest.authorizationLocation(codeUrl)
                    .setResponseType(response_type).setClientId(clientId).setRedirectURI(redirectUrl)
                    .buildQueryMessage();
            redirectUrl = accessTokenRequest.getLocationUri();
        } catch (OAuthSystemException e) {
            e.printStackTrace();
        }
        return "redirect:"+redirectUrl;
    }
    @RequestMapping("/callbackCode")
    public Object toLogin(HttpServletRequest request)throws Exception {
        System.out.println("-----------客户端/callbackCode--------------------------------------------------------------------------------");
        HttpServletRequest httpRequest = (HttpServletRequest)request;
        code = httpRequest.getParameter("code");
        System.out.println(code);
        OAuthClient oAuthClient =new OAuthClient(new URLConnectionClient());
        try {
            OAuthClientRequest accessTokenRequest = OAuthClientRequest
                    .tokenLocation(accessTokenUrl)
                    .setGrantType(GrantType.AUTHORIZATION_CODE)
                    .setClientId(clientId)
                    .setClientSecret(clientSecret)
                    .setCode(code)
                    .setRedirectURI(redirectUrl)
                    .buildQueryMessage();
            //去服务端请求access token，并返回响应
            accessTokenRequest.addHeader("Content-Type", "application/x-www-form-urlencoded");
            OAuthAccessTokenResponse oAuthResponse =oAuthClient.accessToken(accessTokenRequest, OAuth.HttpMethod.POST);
            //获取服务端返回过来的access token
            String accessToken = oAuthResponse.getAccessToken();
            //查看access token是否过期
            //Long expiresIn =oAuthResponse.getExpiresIn();


            System.out.println("客户端/callbackCode方法的token：：："+accessToken);
            return accessToken(accessToken);
        } catch (OAuthSystemException e) {
            e.printStackTrace();
        }
        return null;
    }

    @RequestMapping("/accessToken")
    public String accessToken(String accessToken) throws Exception{
        OAuthClient oAuthClient = new OAuthClient(new URLConnectionClient());
        try {
            System.out.println("-------获取Token----------------------------------------------------------------------------------");
            OAuthClientRequest userInfoRequest = new OAuthBearerClientRequest(userInfoUrl).setAccessToken(accessToken).buildQueryMessage();
            OAuthResourceResponse resourceResponse = oAuthClient.resource(userInfoRequest, OAuth.HttpMethod.GET,OAuthResourceResponse.class);
            String username = resourceResponse.getBody();
            System.out.println(1213);
            System.out.println(username);
            JsonParser jp = new JsonParser();
            //将json字符串转化成json对象
            JsonObject jo = jp.parse(username).getAsJsonObject();
            String uid = jo.get("uid").getAsString();
            String name = jo.get("name").getAsString();
            String sid = jo.get("profiles").getAsJsonObject().get("id").getAsString();

            System.out.println(sid);
            System.out.println("uid：" + uid);
            System.out.println("name：" + name);


            // 获取返回信息
            //返回 调用登录方法
            return username;  //调用方法 loginconn.login(sid);
        } catch (OAuthSystemException e) {
            e.printStackTrace();
        } catch (OAuthProblemException e) {
            e.printStackTrace();
        }
        return null;
    }

}
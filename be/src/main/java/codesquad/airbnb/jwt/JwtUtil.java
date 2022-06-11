package codesquad.airbnb.jwt;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import org.springframework.http.HttpHeaders;

public class JwtUtil {

    private JwtUtil() {

    }

    public static String getAccessToken(HttpServletRequest request) {
        String valueOfAuthorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);

        if (valueOfAuthorizationHeader == null || !valueOfAuthorizationHeader.startsWith(JwtConstant.ACCESS_TOKEN_TYPE)) {
            throw new IllegalArgumentException("access 토큰이 존재하지 않습니다.");
        }

        return valueOfAuthorizationHeader.substring(JwtConstant.ACCESS_TOKEN_TYPE.length());
    }

    public static String getRefreshToken(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        String refreshToken = null;
        for (Cookie cookie : cookies) {
            if (cookie.getName().equals(JwtConstant.REFRESH_TOKEN_HEADER_NAME)) {
                refreshToken = cookie.getValue();
                break;
            }
        }

        if (refreshToken == null) {
            throw new IllegalArgumentException("refresh 토큰이 존재하지 않습니다.");
        }

        return refreshToken;
    }
}

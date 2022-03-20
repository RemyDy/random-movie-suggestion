import jwt_decode from "jwt-decode";

function isTokenValid(token){
    const decodedToken = jwt_decode(token);
    const expirationUnix = decodedToken.exp;
    const timestampJS = new Date().getTime();
    const timestampUnix = Math.round(timestampJS / 1000)

    return expirationUnix - timestampJS > 0;
}

export default isTokenValid;
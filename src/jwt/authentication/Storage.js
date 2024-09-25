// export const Token =()=>{
//     const token =localStorage.getItem("token")
//     return JSON.parse(token) || []
// }
import {jwtDecode} from 'jwt-decode'; 

export const Token = () => {
    const token = localStorage.getItem("token");

    if (token) {
        try {
            const decodedToken = jwtDecode(token);
            console.log(decodedToken, "Decoded Token");
            return decodedToken; 
        } catch (error) {
            console.error("Failed to decode token:", error);
            return {};
        }
    }

    return {};
};

export const Logout = () => {
    return localStorage.removeItem("token");
};

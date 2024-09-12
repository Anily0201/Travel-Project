// export const Token =()=>{
//     const token =localStorage.getItem("token")
//     return JSON.parse(token) || []
// }

export const Token = () => {
    const token = localStorage.getItem("token");

    if (token) {
        try {
            return JSON.parse(token);
        } catch (error) {
            console.error("Failed to parse token:", error);
            return {};  
        }
    }
    
    return {};
};



export const Logout =()=>{
    return localStorage.removeItem("token");
};
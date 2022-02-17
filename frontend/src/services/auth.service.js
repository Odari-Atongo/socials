import axios from "axios";
const API_URL = "http://localhost:5000/api/auth";

class AuthService {
    register(username, email, password) {
        return axios.post(API_URL + "signup", {
        username,
        email,
        password
        })
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
    
    async login(username, password) {
        return await axios.post(API_URL + "signin", {
            username,
            password
        }).then(response => {
            if(response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data))
            }
            return response.data
        })
    }
    logout() {
        localStorage.removeItem("user");
    }
}

export default new AuthService()
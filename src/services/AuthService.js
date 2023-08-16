import { useNavigate } from "react-router-dom";
import axios from 'axios'
const AuthService = () => {
    const navigate = useNavigate();
    const axiosInstance = axios.create({
        timeout: 500, // Set a timeout of 5 seconds
      });
    const isValidRegistration = async (username, password) => {
        try {
            const output = await axiosInstance.post('http://localhost:8080/api/auth/register', {
                username: username,
                password: password
            });
            if (output.status === 200 && output.data.response === 'User Registered successfully') {
                return true;
            } else {
                return false;
            }
        }
        catch (error) {
            navigate('/error')
        }

    }
    const isValidLogin = async (username, password) => {
        try {
            const output = await axiosInstance.post('http://localhost:8080/api/auth/login', {
                username: username,
                password: password
            });
            if (output.status === 200) {
                localStorage.setItem("token", output.data.token)
                localStorage.setItem("loggedIn", true)
                localStorage.setItem("username", username)
                return true;
            } else {
                return false;
            }
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response && error.response.status === 404) {
                    return false;
                }
            }
            navigate('/error')
        }
    }
    return { isValidRegistration, isValidLogin }
}
export default AuthService
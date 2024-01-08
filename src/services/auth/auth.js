import axios from "../axios";

export const login = async (body) => {
    try {
        // debugger
        const response = await axios.post("login", body);
        return response;
    } catch (err) {
        return err.response
    }
}
export const resetPass = async (body) => {
    try {
        // debugger
        const response = await axios.post("reset-password", body);
        return response;
    } catch (err) {
        return err.response
    }
}
export const sendResetMail = async (body) => {
    try {
        // debugger
        const response = await axios.post("forgot-password", body);
        return response;
    } catch (err) {
        return err.response
    }
}
export const registerUser = async (body) => {
    try {
        // debugger
        const response = await axios.post("users", body);
        return response;
    } catch (err) {
        return err.response
    }
}

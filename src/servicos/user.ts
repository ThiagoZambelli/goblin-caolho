import axios from "axios";
import INovoUsuario from "interfaces/INovoUsuario";

const userAPI = axios.create({ baseURL: "https://lithlez-api.onrender.com/user" });

export async function postUser(userData: INovoUsuario) {
    try {
        await userAPI.post("", userData);
    }
    catch (err) {
        console.log(err)
    }
}







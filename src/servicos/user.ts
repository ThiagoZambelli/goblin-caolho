import axios from "axios";
import INovoUsuario from "interfaces/INovoUsuario";

const userAPI = axios.create({ baseURL: "https://lithlez-api.onrender.com/user" });

export async function postUser(userData: INovoUsuario) {
    try {
      const response =  await userAPI.post("", userData);
      return response.data;
    }
    catch (err) {
        console.log(err)
    }
}







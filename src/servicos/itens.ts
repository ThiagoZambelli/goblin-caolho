import axios from "axios";

const itensAPI = axios.create({ baseURL: "https://lithlez-api.onrender.com/item" });

export async function getItens() {
    const response = await itensAPI.get('')    
    return response.data
}
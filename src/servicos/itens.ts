import axios from "axios";

const itensAPI = axios.create({baseURL:"http://localhost:8000/itens"});

export async function getItens(){
    const response = await itensAPI.get('/')    
    return response.data
}
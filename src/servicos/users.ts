import axios from "axios";

const userAPI = axios.create({ baseURL: "http://localhost:8000/user" });

// export async function getItens(){
//     const response = await itensAPI.get('/')
//     return response.data
// }

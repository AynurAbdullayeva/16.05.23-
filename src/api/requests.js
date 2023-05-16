import { BASE_URL } from "./base_url";
import axios from "axios";

export const getSearch= async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/search`)
    .then(res=>{
        globalData=res.data;
    })
    return globalData
}
import axios from "axios";

export const get_all_providers=()=>axios.get("https://api.apis.guru/v2/providers.json")    

export const get_provider_details=(provider:string)=>axios.get(`https://api.apis.guru/v2/${provider}.json`)

    
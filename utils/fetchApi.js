import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';


export const fetchApi = async (url) => {

    const {data} = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'fbc624ae88mshf17c507cbabf0c4p186828jsnbe29ce5e30ec'
        }
    });

    return data
 }
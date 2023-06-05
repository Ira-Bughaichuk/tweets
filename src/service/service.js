import axios from 'axios';

export const tweetsService = axios.create({
    baseURL: 'https://64799a45a455e257fa63668c.mockapi.io', 
  });

export const getTweets = async ()=>{
  const {data} = await tweetsService.get('/tweets');
  return data;
}


export const updateTweetById = async ( obj)=>{
  const {data} = await tweetsService.put(`/tweets/${obj.id}`, obj);
  return data;
}


import axios from 'axios';

const baseUrl = 'https://ediaristas-workshop.herokuapp.com';

export const ApiSerivce = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  }
})
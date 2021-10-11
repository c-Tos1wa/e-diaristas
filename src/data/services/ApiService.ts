import axios from 'axios';

const baseUrl = 'https://ediaristas-workshop.herokuapp.com';

export const ApiService = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  }
})
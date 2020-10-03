import axios, { AxiosInstance } from 'axios'
import { ENV } from 'config/index.config'

export class ApiService {
  api: AxiosInstance

  constructor() {
    // Set config defaults when creating the instance
    this.api = axios.create({
      // baseURL: ENV.REACT_APP_API_URL,
      baseURL: 'http://localhost:3001/api',
    });

    // Alter defaults after instance has been created
    this.api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  }
}
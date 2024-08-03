import axios from 'axios';
import { LOCAL_STORAGE_ACTIVE_TOKEN } from '../config/constants';

export const $api = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: { Authorization: localStorage.getItem(LOCAL_STORAGE_ACTIVE_TOKEN) },
});

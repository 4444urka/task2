import axios from 'axios'
import { TUserInfo } from '../types';

export async function registerUser(data: TUserInfo) {
  const response = await axios.post('http://localhost:5117/', data);
  return response.data;
}
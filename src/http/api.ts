import { TCompanyInfo, TUserLoginInfo, TUserRegistrationInfo } from '../types';
import { $host } from './index';

export async function registerUser(data: TUserRegistrationInfo) {
  const response = await $host.post('/register', data);
  return response;
}

export async function registerCompany(data: TCompanyInfo)  {
  const response = await $host
      .post(`/Company/CreateCompany?companyName=${data.companyName}&country=${data.country}`)
      .then((response) => {
        alert('Компания успешно зарегистрирована');
      })
      .catch((error) => {
        if (error.response.status === 500)
          alert('Такая компания уже существует');
        else 
          alert('Ошибка сервера');
        console.log(error.response.data);
      });
  return response;
}

export async function login(data: TUserLoginInfo) {
  const response = await $host.post('/login', data);
  return response;
}

export async function getUserIdByName(name: string) {
  const response = await $host.get(`/ByName/${name}`);
  return response.data.id;
}

export async function getCompanyIdByName(name: string) {
  const response = await $host.get(`/GetByName/${name}`);
  return response.data.id;
}


export async function getCompanyCountryByName(name: string) {
  const response = await $host.get(`/GetByName/${name}`);
  return response.data.country;
}

export async function updateCompany(id: string, companyName: string, bossId: string, country: string) {
  const response = await $host.put(`/UpdateCompany/${id}?companyName=${companyName}&bossId=${bossId}&country=${country}`);
  return response;
}
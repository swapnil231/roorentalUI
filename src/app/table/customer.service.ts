import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface customer {
  code: string;
  name: string;
  email: string;
  status: string;
  phone: string;
}

export const config = {
  baseUrl: 'http://localhost:3000',
  getEndPoint: 'users',
  PostEndPoint: '',
  DeleteEndPoint: '',
  PatchEndPoints: '',
};

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getAllCustomerData(): Observable<customer[]> {
    console.log(`${config.baseUrl}/${config.getEndPoint}`);
    return this.http.get<customer[]>(`${config.baseUrl}/${config.getEndPoint}`);
  }
  saveCustomer(data: any) {
    console.log(data);
    console.log(`${config.baseUrl}/${config.getEndPoint}`);
    return this.http.post('http://localhost:3000/users', data);
  }
  getCustomerbyCode(code: any) {
    console.log(`${config.baseUrl}/${config.getEndPoint}/${code}`);
    return this.http.get(`${config.baseUrl}/${config.getEndPoint}/${code}`);
  }
  patchCustomerbyCode(code: any, data: any) {
    console.log(`${config.baseUrl}/${config.getEndPoint}/${code}`);
    return this.http.patch(
      `${config.baseUrl}/${config.getEndPoint}/${code}`,
      data
    );
  }
  deletechCustomerbyCode(code: any) {
    console.log(`${config.baseUrl}/${config.getEndPoint}/${code}`);
    return this.http.delete(`${config.baseUrl}/${config.getEndPoint}/${code}`);
  }
}

import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PaymentService {
  constructor(private http: HttpClient) {}

  generateToken() {
    return this.http.get('/api/paypal/generateToken');
  }

  pay(payload) {
    return this.http.post('/api/paypal/pay', payload);
  }
}

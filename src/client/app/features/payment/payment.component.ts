import { AfterViewInit, Component } from '@angular/core';
// import { PaymentService } from '../../core/services/payment.service';

// const braintree = require('braintree-web');

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements AfterViewInit {
  // token: string;
  // paypal: any;
  // response: boolean = null;
  // payload: any;
  //
  // constructor(private paymentService: PaymentService) {
  // }
  //
  // processPayPal(orderInfo) {
  //   const PayPalObject = {
  //     paymentMethodNonce: this.payload.nonce,
  //     orderId: orderInfo.OrderID,
  //     amount: orderInfo.Total,
  //     descriptor: {
  //       name: 'PlexusWorldW*YourOrder'
  //     }
  //   };
  //
  //   return this.paymentService.pay(PayPalObject).do(res => {
  //     const e: any = res;
  //     this.response = e.success;
  //
  //   });
  // }
  //
  ngAfterViewInit() {
  //   this.paymentService.generateToken().subscribe(res => {
  //     const e: any = res;
  //     this.token = e.clientToken;
  //
  //     braintree.client.create({
  //       authorization: this.token
  //     }, (clientErr, clientInstance) => {
  //       // Create a PayPal Checkout component
  //       braintree.paypalCheckout.create({
  //         client: clientInstance
  //       }, (createErr, paypalCheckoutInstance) => {
  //         if (createErr) {
  //           return;
  //         }
  //         this.paypal.Button.render({
  //           env: process.env.PAYPAL_ENVIRONMENT,
  //           locale: 'en_US',
  //           commit: 'true',
  //           style: {
  //             size: 'medium',
  //             color: 'silver',
  //             shape: 'pill',
  //             label: 'checkout'
  //           },
  //           payment: () => {
  //             return paypalCheckoutInstance.createPayment({
  //               flow: 'checkout', // Required
  //               amount: 5, // Required
  //               currency: 'USD', // Required
  //               intent: 'sale', // Required
  //               enableShippingAddress: false
  //             });
  //           },
  //           onAuthorize: (data) => {
  //             return paypalCheckoutInstance.tokenizePayment(data).then((payload) => {
  //               this.payload = payload;
  //             });
  //           },
  //           onCancel: function (data) {
  //           },
  //           onError: function (err) {
  //             this.orderErrorOut.emit(err);
  //           }
  //         }, '#paypal-button');
  //       });
  //     });
  //   });
  }
}

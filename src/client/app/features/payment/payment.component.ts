import { AfterViewChecked, Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { environment } from './../../../../environments/environment';


declare let paypal: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements AfterViewChecked {
  addScript: boolean = false;
  amount: number;
  invalid: boolean = false;
  display: number = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) {
  }


  verify() {
    const regex = /^[1-9]\d*$/g;
    let amount = this.amount !== null ? this.amount.toString() : null;
    let res = regex.exec(amount);
    this.invalid = res == (null || undefined);
  }

  paypalConfig = {
    env: environment.production ? 'production' : 'sandbox',
    client: {
      sandbox: environment.paypal,
      production: environment.paypal
    },
    style: {
      size: 'responsive',
      color: 'gold',
      shape: 'pill',
      label: 'pay',
      tagline: 'false',
      layout: 'horizontal',
      fundingicons: 'true'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [{
            amount: {
              total: this.amount,
              currency: 'USD'
            }
          }]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then(() => {
        alert('Thank you for your purchase!');
      });
    }
  };

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-button');
      });
    }
  }

  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scriptTagElement = this.renderer.createElement('script');
      scriptTagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      this.renderer.appendChild(this.el.nativeElement, scriptTagElement);
      scriptTagElement.onload = resolve;
    });
  }
}

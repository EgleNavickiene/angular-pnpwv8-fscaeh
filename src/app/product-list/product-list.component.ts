import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  shareFb() {
    //window.alert('The product has been shared!');
    //cia galetu buti modalinis langas

    let url =
    'https://facebook.com/sharer.php?display=popup&u=' + window.location.href;

    window.open(url, 'sharer');
  }  

  shareTweet() {
    let tweet =  'https://twitter.com/intent/tweet?text=links&url='  + window.location.href;
  
    window.open(tweet, 'sharer');
  } 
};


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
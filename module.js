(function() {
  'use strict';

  angular
    .module('etsyShop', [
      'ngRoute',
      'underscore',
      'moment'
    ])
    .config(function($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl: 'views/nav.html',
          controller: 'StoreController'
        })
        .when('/store', {
          templateUrl: 'views/storeView/store.html',
          controller: 'StoreController'
        })
        .when('/store/:itemId', {
          templateUrl: 'views/storeView/detail.html',
          controller: 'StoreController'
        })
        .when('/cart', {
          templateUrl: 'views/cartView/cart.html',
          controller: 'StoreController'
        });
    });


        /// DEPENDENCIES ///
  angular
    .module('underscore', [])
    .factory('_', function ($window) {
      return $window._;
    });
  angular
    .module('moment', [])
    .factory('moment', function ($window) {
      return $window.moment;
    });

}());

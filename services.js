(function() {
  'use strict';
  angular
    .module('etsyShop')
                                      ///////ETSY SERVICE///////////
    .factory('EtsyService', function($http){


    //   function(){
    //      return element(document).find('body').addClass('hidden')
    //  },

      var urlOptions = {
        baseUrl: 'https://openapi.etsy.com/v2/listings/active.js?includes=MainImage&keywords=',
        apiKey: '&api_key=bvkb5zmhkonrbcizks9cqeh1',
        callback: '&callback=JSON_CALLBACK',
        buildUrl: function(keyword){
          return this.baseUrl + keyword + this.apiKey + this.callback;
        }
      };
      var getSingleItem = function(item){
        return $http.jsonp(urlOptions.buildUrl()).then(function(data){
          console.log(data.data.results.item);
        })
      };
      var getItems = function(dog){
        return $http.jsonp(urlOptions.buildUrl(dog)).then(function(data){
          return data.data.results
        })
      };
      return {
        getItems : getItems,
        getSingleItem : getSingleItem
      };
    })
                                    ///////CART SERVICE///////////

    .factory('CartService', function($http){
      var url = 'http://tiny-tiny.herokuapp.com/collections/ng-shoppingcart2';

      /////GET CART ITEMS////
      var getCartItems = function(){
        return $http.get(url)
      };
      ////ADD ITEMS TO CART////
      var addToCart = function(item){
        $http.post(url, item).success(function(response){
        });
      };
      //////REMOVE ITEM FROM CART/////
      var getID = function(item){
        console.log(item._id);
        return item._id
      };
      var removeFromCart = function(item){
        var id = getID(item);
        $http.delete(url + "/" + id)
      };

      ////VIEW SINGLE ITEM////
      var getSingleItem = function(item){
        url = 'http://tiny-tiny.herokuapp.com/collections/ng-shoppingcart2'
        var id = getID(item);
        var dog = $http.get(url + "/"+ _id);
        console.log(dog);
      };

      return {
        getCartItems : getCartItems,
        addToCart : addToCart,
        removeFromCart : removeFromCart,
        getSingleItem : getSingleItem
      }
    })
})();

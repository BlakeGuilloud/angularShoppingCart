(function() {
  'use strict';

  angular
    .module('etsyShop')
    .controller('StoreController', function($scope, $location, EtsyService, CartService, $routeParams){

      /////THIS GETS ALL STORE DATA/////
    $scope.searchDog = function(dog){
        EtsyService.getItems(dog).then(function(items){
        $scope.items = items;
        $location.path("/store");
      })
    }
    EtsyService.getItems('dog').then(function(items){
    $scope.items = items;
-  })

      /////THIS SHOULD GET A SINGLE ETSY ITEM ///////
      // $scope.getSingleItem = function(item){
      //   EtsyService.getSingleItem(item);
      // }

      //////THIS SHOULD GET ALL CART DATA //////
      CartService.getCartItems().success(function(cartItems){
        $scope.cartItems = cartItems;
      })

      // ///THIS SHOULD GET A SINGLE CART ITEM ///////
      // CartService.getSingleItem().success(function(item){
      //   $scope.item = item;
      // })

      //////THIS SHOULD REMOVE ITEM FROM CART /////
      $scope.removeFromCart = function(item){
       CartService.removeFromCart(item);
     };

      /////THIS SHOULD POST SELECTED ITEM INTO CART /////
      $scope.addItem = function(item){
        CartService.addToCart(item);
      };
})


})();

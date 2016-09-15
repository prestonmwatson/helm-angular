angular
    .module('helm', ['ui.router'])
    .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
  function MainRouter($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '../templates/home.html'
      })
      .state('shop', {
        url: '/shop',
        templateUrl: '../templates/shop.html'
      })
      .state('product', {
        url: '/product',
        templateUrl: '../templates/product.html'
      })
      .state('product.description', {
        url: '/description',
        templateUrl: '../templates/tabs/description.html'
      })
      .state('product.ratings', {
        url: '/ratings',
        templateUrl: '../templates/tabs/ratings.html'
      })
      .state('product.questions', {
        url: '/questions',
        templateUrl: '../templates/tabs/questions.html'
      })
      .state('cart', {
        url: '/cart',
        templateUrl: '../templates/cart.html'
      })
      .state('confirmation', {
        url: '/confirmation',
        templateUrl: '../templates/confirmation.html'
      })


      $urlRouterProvider.otherwise('/');
  }

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
        url: '/product?name',
        templateUrl: '../templates/product.html',
        controller: function($scope, $stateParams){
          $scope.name = $stateParams.name;
        }
      })

      $urlRouterProvider.otherwise('/');
  }

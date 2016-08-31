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

      $urlRouterProvider.otherwise('/');
  }

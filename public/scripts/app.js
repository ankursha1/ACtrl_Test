var RootApp = angular.module('RootApp', ['ui.router', 'ui.bootstrap', 'MainController', 'Services']);


RootApp.config(function($stateProvider, $urlRouterProvider) {
    
    // $urlRouterProvider.otherwise('/session');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('session', {
            url: '/session',
            templateUrl: './public/views/partial-session.html',
            controller: 'SessionController'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            templateUrl: './public/views/partial-about.html'   
        });
        
});


RootApp.run(function ($rootScope, $state){
    $state.transitionTo('about');
});
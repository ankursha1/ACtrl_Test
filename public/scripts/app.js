var RootApp = angular.module('RootApp', ['ui.router', 'ui.bootstrap', 'MainController', 'Services']);


RootApp.config(function($stateProvider, $urlRouterProvider) {
    
    // $urlRouterProvider.otherwise('/session');
    
    $stateProvider
        
        //================= HOME STATES AND NESTED VIEWS ======================
        .state('session', {
            url: '/session',
            templateUrl: './public/views/partial-session.html',
            controller: 'SessionController'
        })

        //========================== LOGOUT ===================================
        .state('logout', {
            url: '/logout',
            controller:['$state', 'SessionService', function($state, SessionService) {
                        SessionService.logout();
                        $state.go('session');
           }]
        })
        
        // ========================== ABOUT PAGE ==============================
        .state('about', {
            url: '/about',
            templateUrl: './public/views/partial-about.html'
        })

        // ========================== HOME PAGE ================================
        .state('home', {
            url: '/home',
            params:{loginname:null},
            templateUrl: './public/views/partial-home.html',
            controller: 'WelcomeController'
        });
        
});

/*
RootApp.run(function ($rootScope, $state){
    $state.go('session');
});*/
RootApp.run(function ($rootScope, $location) {
    $rootScope.$watch('currentUser', function(currentUser) {
        if (!currentUser && (['/', '/login', '/logout', '/signup'].indexOf($location.path()) == -1 )) {
        }
    });

    $rootScope.$on('event:auth-loginRequired', function() {
      $location.path('/login');
      return false;
    });
});
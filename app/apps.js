angular
    .module('app',['ui-router'])
    .config(['$urlRouterProvider','$stateProvider', function(){
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home',{
                url:'/',
                templateUrl:'static/home.html'
            })


    }])


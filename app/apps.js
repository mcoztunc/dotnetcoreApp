angular
    .module('app',['ui-router'])
    .config(['$urlRouterProvider','$stateProvider', function(){
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home',{
                url:'/',
                templateUrl:'static/home.html'
            })
            .state('chprop',{
                url:'/chprop',
                templateUrl:'static/chprop.html'
            })
            
            .state('delch',{
                url:'/delch',
                templateUrl:'static/delch.html'
            })
            
            .state('logop',{
                url:'/logop',
                templateUrl:'static/logop.html'
            })
            
            .state('newch',{
                url:'/newch',
                templateUrl:'static/newch.html'
            })
            
            .state('runch',{
                url:'/runch',
                templateUrl:'static/runch.html'
            })
            
            .state('startch',{
                url:'/startch',
                templateUrl:'static/startch.html'
            })
            
            .state('stopch',{
                url:'/stopch',
                templateUrl:'static/stopch.html'
            })
            



    }])


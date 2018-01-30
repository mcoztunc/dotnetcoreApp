'use strict';

var app = angular.module('ContactsApp', []);

document.addEventListener('DOMContentLoaded', function () {
    angular.bootstrap(document, ['ContactsApp']);
});
/*
angular.module('ContactsApp').component('home',{
template: require('./static/newch.html')
});

angular.module('ContactsApp').component('newch',{
    template: require('./static/newch.html')
    });
angular.module('ContactsApp').component('chprop',{
    template: require('./static/newch.html')
    });
angular.module('ContactsApp').component('delch',{
    template: require('./static/newch.html')
    });
angular.module('ContactsApp').component('startch',{
    template: require('./static/newch.html')
    });
angular.module('ContactsApp').component('stopch',{
    template: require('./static/newch.html')
    });
angular.module('ContactsApp').component('runch',{
    template: require('./static/newch.html')
    });
angular.module('ContactsApp').component('logop',{
    template: require('./static/newch.html')
    });
app.config(function($stateProvider){
var states = [
    {
        name:'home', component: 'home', useAsDefault:true
    },
    {
        name:'newch', component: 'newch'
    },
    {
        name:'chprop', component: 'chprop'
    },
    {
        name:'delch', component: 'delch'
    },
    {
        name:'startch', component: 'startch'
    },
    {
        name:'stopch', component: 'stopch'
    },
    {
        name:'runch', component: 'runch'
    },
    {
        name:'logop', component: 'logop'
    }
]




});



*/


/************   Home           z        

app.component('home',{
    templateUrl:'static/home.html',
    $routeConfig: [
        {path:'',name:'',component:'',useAsDefault:true  },
        {path:'',name:'',component:''                    }
    ]


    });

/************   VIEW CHANNELS                     *** 


app.component('newch',{
templateUrl:'static/newch.html'
}); 

app.component('chprop',{
    templateUrl:'static/chprop.html'
    });

app.component('delch',{
    templateUrl:'static/delch.html'
    });
    
app.component('startch',{
    templateUrl:'static/startch.html'
    });
app.component('stopch',{
    templateUrl:'static/stopch.html'
    });
app.component('runch',{
    templateUrl:'static/runch.html'
    });
                    
/************   Logging                     

app.component('logop',{
    templateUrl:'static/logop.html'
    });
***/ 

app.controller('ContactsCtrl', function (ContactsService) {
    var ctrl = this;
    ctrl.Title = 'Contacts List';

    LoadContacts();

    function LoadContacts() {
        ContactsService.Get()
            .then(function (contacts) {
                ctrl.Contacts = contacts
            }, function (error) {
                ctrl.ErrorMessage = error
            });
    }
});

app.service('ContactsService', function ($http) {
    var svc = this;
    var apiUrl = 'http://localhost:5000/api';

    svc.Get = function () {
        return $http.get(apiUrl + '/contacts')
            .then(function success(response) {
                return response.data;
            });
    }
});
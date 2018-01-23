'use strict';

var app = angular.module('ContactsApp', []);

document.addEventListener('DOMContentLoaded', function () {
    angular.bootstrap(document, ['ContactsApp']);
});

/************   Logging                     ***/ 

app.component('home',{
    templateUrl:'static/home.html'
    });

/************   VIEW CHANNELS                     ***/ 


app.component('newch',{
templateUrl:'static/newch.html'
}); // her sekme için komponent oluştur routingten bağla olayı 

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
                    
/************   Logging                     ***/ 

app.component('logop',{
    templateUrl:'static/logop.html'
    });


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
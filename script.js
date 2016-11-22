var app = angular.module('formApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/form', {
            controller:  'formController',
            templateUrl:  'form.html'
        })
        .when('/display', {
            controller:  'formController',
            templateUrl:  'display.html'
        });
});

app.controller('formController', function() {

});

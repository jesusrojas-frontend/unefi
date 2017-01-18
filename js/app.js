'use strict'

var app = angular.module("AprendeFacil", [
  'ngAnimate',
  'ngResource',
  'ngRoute',
  'firebase'
])

.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
      templateUrl: 'vistas/main.html'
    })
    .when('/registrar',{
      templateUrl: 'vistas/registro.html',
      controller: 'AutenCtrl'
    })
    .when('/ingresar',{
      templateUrl: 'vistas/ingresar.html',
      controller: 'AutenCtrl'
    })
    .when('/registro-profesor',{
      templateUrl: 'vistas/registrar-profesor.html',
      controller: 'Auten-Prof-Ctrl'
    })
    .when('/ingresar-profesor',{
      templateUrl: 'vistas/ingresar-profesor.html',
      controller: 'Auten-Prof-Ctrl'
    })
    .when('/profesores',{
      templateUrl: 'vistas/profesores.html',
      controller: 'ClaseCtrl'
    })
    .when('/publicar',{
      templateUrl: 'vistas/publicar.html',
      controller: 'ClaseCtrl'
    })
    .when('/clase/:claseId',{
      templateUrl: 'vistas/clase.html',
      controller: 'ClaseCtrl'
    })
    .when('/prueba',{
      templateUrl: 'vistas/prueba.html',

    })


});

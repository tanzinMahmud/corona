var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope, $http) {
    $http.get('https://corona.lmao.ninja/all')
        .then(function (response) {
            $scope.totalData = response.data;
        });

    $http.get('https://corona.lmao.ninja/countries?sort=country')
        .then(function (response) {
            $scope.allCountryData = response.data;
        });
});
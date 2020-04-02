var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope, $http) {

    $scope.totalData = [];
    $scope.allCountryData = [];

    $http.get('https://corona.lmao.ninja/all')
        .then(function (response) {
            $scope.totalData = response.data;
        });

    $http.get('https://corona.lmao.ninja/countries?sort=country')
        .then(function (response) {
            $scope.allCountryData = response.data;
        });

    setInterval(function () {
        $http.get('https://corona.lmao.ninja/all')
            .then(function (response) {
                $scope.totalData = response.data;
            });

        $http.get('https://corona.lmao.ninja/countries?sort=country')
            .then(function (response) {
                $scope.allCountryData = response.data;
            });
    }, 3000);
});
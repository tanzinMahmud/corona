var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope, $http) {

    $scope.totalData = [];
    $scope.allCountryData = [];

    $http.get('https://corona.lmao.ninja/v2/all')
        .then(function (response) {
            $scope.totalData = response.data;
            $scope.totalData.cases = new Number($scope.totalData.cases).toLocaleString("bn-BD");
            $scope.totalData.deaths = new Number($scope.totalData.deaths).toLocaleString("bn-BD");
            $scope.totalData.recovered = new Number($scope.totalData.recovered).toLocaleString("bn-BD");
            $scope.totalData.active = new Number($scope.totalData.active).toLocaleString("bn-BD");
            $scope.totalData.affectedCountries = new Number($scope.totalData.affectedCountries).toLocaleString("bn-BD");

            $scope.lastUpdateTime = new Date();
            try {
                if ($scope.lastUpdateTime.toLocaleString("bn-BD").includes("PM")) {
                    $scope.lastUpdateTime = $scope.lastUpdateTime.toLocaleString("bn-BD").replace("PM", "অপরাহ্ন");
                }
                else if ($scope.lastUpdateTime.toLocaleString("bn-BD").includes("AM")) {
                    $scope.lastUpdateTime = $scope.lastUpdateTime.toLocaleString("bn-BD").replace("AM", "পূর্বাহ্ণ");
                }
            }
            catch (e) {

            }

        });

    $http.get('https://corona.lmao.ninja/v2/countries?sort=country')
        .then(function (response) {
            $scope.allCountryData = response.data;
            $scope.allCountryData = _.sortBy($scope.allCountryData, 'cases').reverse();
            var bdData = {};

            for (var i = 0; i < $scope.allCountryData.length; i++) {
                $scope.allCountryData[i].cases = new Number($scope.allCountryData[i].cases).toLocaleString("bn-BD");
                $scope.allCountryData[i].todayCases = new Number($scope.allCountryData[i].todayCases).toLocaleString("bn-BD");
                $scope.allCountryData[i].deaths = new Number($scope.allCountryData[i].deaths).toLocaleString("bn-BD");
                $scope.allCountryData[i].todayDeaths = new Number($scope.allCountryData[i].todayDeaths).toLocaleString("bn-BD");
                $scope.allCountryData[i].recovered = new Number($scope.allCountryData[i].recovered).toLocaleString("bn-BD");
                $scope.allCountryData[i].active = new Number($scope.allCountryData[i].active).toLocaleString("bn-BD");
                $scope.allCountryData[i].critical = new Number($scope.allCountryData[i].critical).toLocaleString("bn-BD");
                $scope.allCountryData[i].casesPerOneMillion = new Number($scope.allCountryData[i].casesPerOneMillion).toLocaleString("bn-BD");
                $scope.allCountryData[i].deathsPerOneMillion = new Number($scope.allCountryData[i].deathsPerOneMillion).toLocaleString("bn-BD");
                if ($scope.allCountryData[i].country == 'Bangladesh') {
                    bdData = $scope.allCountryData[i];
                    $scope.allCountryData.splice(i, 1);
                    $scope.allCountryData.unshift(bdData);
                }
            }
        });

    setInterval(function () {
        $http.get('https://corona.lmao.ninja/all')
            .then(function (response) {
                $scope.totalData = response.data;
                $scope.totalData.cases = new Number($scope.totalData.cases).toLocaleString("bn-BD");
                $scope.totalData.deaths = new Number($scope.totalData.deaths).toLocaleString("bn-BD");
                $scope.totalData.recovered = new Number($scope.totalData.recovered).toLocaleString("bn-BD");
                $scope.totalData.active = new Number($scope.totalData.active).toLocaleString("bn-BD");
                $scope.totalData.affectedCountries = new Number($scope.totalData.affectedCountries).toLocaleString("bn-BD");

                $scope.lastUpdateTime = new Date();
                try {
                    if ($scope.lastUpdateTime.toLocaleString("bn-BD").includes("PM")) {
                        $scope.lastUpdateTime = $scope.lastUpdateTime.toLocaleString("bn-BD").replace("PM", "অপরাহ্ন");
                    }
                    else if ($scope.lastUpdateTime.toLocaleString("bn-BD").includes("AM")) {
                        $scope.lastUpdateTime = $scope.lastUpdateTime.toLocaleString("bn-BD").replace("AM", "পূর্বাহ্ণ");
                    }
                }
                catch (e) {

                }

            });

        $http.get('https://corona.lmao.ninja/countries?sort=country')
            .then(function (response) {
                $scope.allCountryData = response.data;
                $scope.allCountryData = _.sortBy($scope.allCountryData, 'cases').reverse();

                for (var i = 0; i < $scope.allCountryData.length; i++) {
                    $scope.allCountryData[i].cases = new Number($scope.allCountryData[i].cases).toLocaleString("bn-BD");
                    $scope.allCountryData[i].todayCases = new Number($scope.allCountryData[i].todayCases).toLocaleString("bn-BD");
                    $scope.allCountryData[i].deaths = new Number($scope.allCountryData[i].deaths).toLocaleString("bn-BD");
                    $scope.allCountryData[i].todayDeaths = new Number($scope.allCountryData[i].todayDeaths).toLocaleString("bn-BD");
                    $scope.allCountryData[i].recovered = new Number($scope.allCountryData[i].recovered).toLocaleString("bn-BD");
                    $scope.allCountryData[i].active = new Number($scope.allCountryData[i].active).toLocaleString("bn-BD");
                    $scope.allCountryData[i].critical = new Number($scope.allCountryData[i].critical).toLocaleString("bn-BD");
                    $scope.allCountryData[i].casesPerOneMillion = new Number($scope.allCountryData[i].casesPerOneMillion).toLocaleString("bn-BD");
                    $scope.allCountryData[i].deathsPerOneMillion = new Number($scope.allCountryData[i].deathsPerOneMillion).toLocaleString("bn-BD");
                    if ($scope.allCountryData[i].country == 'Bangladesh') {
                        bdData = $scope.allCountryData[i];
                        $scope.allCountryData.splice(i, 1);
                        $scope.allCountryData.unshift(bdData);
                    }
                }
            });
    }, 60000);
});
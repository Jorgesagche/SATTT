var jorge = angular.module("jorge",[]);
jorge.controller("operaciones",function($scope){
	$scope.cantidad1 = 12
	$scope.cantidad2 = 0.12

	$scope.resultado = $scope.cantidad1*$scope.cantidad2
	})



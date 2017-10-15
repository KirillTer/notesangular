var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope){
	console.log("in controller...");
	$scope.newNote = {};
	$scope.info = "";

	$scope.notes = [
		{title: "Title 1", text:"Some text 1"},
		{title: "Title 2", text:"Some text 2"},
		{title: "Title 3", text:"Some text 3"}
	];

	$scope.savenote = function(){
		console.log("Saving...");
		$scope.notes.push($scope.newNote);
		$scope.info = "New Note Added Successfully!";
		$scope.newNote = {};
	};

	$scope.selectnote = function(note){
		$scope.clickednote = note;
	};

	$scope.deletenote = function(){
		console.log($scope.notes.indexOf($scope.clickednote));
		$scope.notes.splice($scope.notes.indexOf($scope.clickednote), 1);
		$scope.info = "Note Deleted Successfully!";
	};

	$scope.clearInfo = function(){
		$scope.info = "";
	};
});
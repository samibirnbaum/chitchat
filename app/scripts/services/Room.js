//A service that holds a function
(function(){

    function Room($firebaseArray){ //injected firebaseArray service for my own service - a service from the AngularFire helper Library
        var Room = {}; //the object which holds everyrthing in this service
        
        var ref = firebase.database().ref().child("rooms"); //holds an object reference to my db in fb
        var rooms = $firebaseArray(ref); //returns the firebase db - each object as a cell in an array
        Room.all = rooms;
        
        return Room;
    }


    angular
        .module("blocChat")
        .factory("Room",["$firebaseArray", Room]); //a service function for ROOM RELATED API QUERIES from the firebase database

})();
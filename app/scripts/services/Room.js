//A service that holds a function
(function(){

    function Room($firebaseArray){ //injected firebaseArray service for my own service - a service from the AngularFire helper Library
        var Room = {}; //the object which holds everyrthing in this service
        /*PRIVATE ATTRIBUTES*/
        var ref = firebase.database().ref().child("rooms"); //holds an object reference to my db in fb
        var rooms = $firebaseArray(ref); //returns the firebase db - each object as a cell in an array
        
        /*PUBLIC ATTRIBUTES*/
        Room.all = rooms;
        Room.currentRoom = "Please select a chat room..."

        /*PUBLIC FUNCTIONS*/
        Room.add = function(room){ //add rooms to the firebase db - takes in a room object
            rooms.$add(room);
        };

        Room.updateCurrentRoom = function(roomName){
            this.currentRoom = roomName;
        };
        
        return Room;
    }


    angular
        .module("blocChat")
        .factory("Room",["$firebaseArray", Room]); //a service function for ROOM RELATED API QUERIES from the firebase database

})();
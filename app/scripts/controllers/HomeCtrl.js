//controller for the home template
(function() {

    function HomeCtrl(Room, Message) {
        this.room = Room; //this injects the room service but also puts it on the scope of this controller so can be accessed in the view
        this.message = Message;
        
        this.activeRoom = "Please select a chat room..."

        this.updateActiveRoom = function(roomName){
            this.activeRoom = roomName;
        }
    }
    
    angular
        .module("blocChat")
        .controller("HomeCtrl", ["Room", "Message", HomeCtrl]);
})();
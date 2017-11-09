//controller for the home template
(function() {

    function HomeCtrl(Room, Message) {
        this.room = Room; //this injects the room service but also puts it on the scope of this controller so can be accessed in the view
        this.message = Message;
        this.sentMessage = "";
        
        this.sendMessage = function(){
            Message.sendMessage(this.sentMessage);
            this.sentMessage = "";
        };
    
    }
    
    angular
        .module("blocChat")
        .controller("HomeCtrl", ["Room", "Message", HomeCtrl]);
})();
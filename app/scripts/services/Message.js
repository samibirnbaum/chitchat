(function(){

    function Message($firebaseArray){
        var Message = {}; //unlike a controller which is a constructor function, where you can use this, in a factory function we create and return the object ourselves

        //PRIVATE ATTRIBUTES
        var ref = firebase.database().ref().child("messages"); //accesses messages object
        var messagesAll = $firebaseArray(ref);

        //PUBLIC ATTRIBUTES
        Message.allMessages = messagesAll;
        Message.currentMessages = null; //holds message object

        //PUBLIC FUNCTIONS
        Message.getByRoomId = function(roomId){ //a function that will access only those messages associated with a roomId
            var refQueried = ref.orderByChild("roomId").equalTo(roomId);
            var messagesQueried = $firebaseArray(refQueried);
            this.currentMessages = messagesQueried;
        };

        return Message;
    }



    angular
        .module("blocChat")
        .factory("Message",["$firebaseArray", Message]); //a service to interact with fb

})();
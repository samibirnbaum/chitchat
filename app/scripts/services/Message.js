(function(){

    function Message($firebaseArray, $cookies){
        var Message = {}; //unlike a controller which is a constructor function, where you can use this, in a factory function we create and return the object ourselves

        //PRIVATE ATTRIBUTES
        var ref = firebase.database().ref().child("messages"); //accesses messages object
        var messagesAll = $firebaseArray(ref);

        //PUBLIC ATTRIBUTES
        Message.allMessages = messagesAll;
        Message.currentMessages = null; //holds message object
        Message.roomId = null;

        //PUBLIC FUNCTIONS
        Message.getByRoomId = function(roomId){ //a function that will access only those messages associated with a roomId
            this.roomId = roomId;
            var refQueried = ref.orderByChild("roomId").equalTo(roomId);
            var messagesQueried = $firebaseArray(refQueried);
            this.currentMessages = messagesQueried;
        };

        Message.sendMessage = function(message){
            var currentUser = $cookies.get('blocChatCurrentUser');
            var messageObject = {
                content: message,
                sentAt: 03+":"+45,
                username: currentUser,
                roomId: Message.roomId
            };
            messagesAll.$add(messageObject);
        };

        return Message;
    }



    angular
        .module("blocChat")
        .factory("Message",["$firebaseArray", "$cookies", Message]); //a service to interact with fb

})();
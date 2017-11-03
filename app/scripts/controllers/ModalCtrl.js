(function(){

    function ModalCtrl($uibModal, Room){
        this.room = Room;
        this.open = function(){ //creating a modal which the user will see and an object which will take in the data from the user input
            var modalInstanceObject = $uibModal.open({
                animation: false,
                templateUrl: '/templates/modalInstance.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'modalInstance'
            });
            
            modalInstanceObject.result.then(function(roomName){ //waiting for result, when that happens then execute the following function
                //data can be sent to the firebase
                Room.add(roomName);
            }); 
        };
        
    }


    angular
        .module("blocChat")
        .controller("ModalCtrl", ["$uibModal", "Room", ModalCtrl])

})();




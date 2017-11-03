//controller for the ModalInstance template
(function(){

    function ModalInstanceCtrl($uibModalInstance){
        this.submit = function(roomName){
            $uibModalInstance.close(roomName); //this actually sends room name back to the promise object we created in modalCtrl when we created the modal
        };

        this.cancel = function(){
            $uibModalInstance.dismiss("cancelled"); //sends this message back to modal promise object
        }
        
    }
        

    
    
    angular
        .module("blocChat")
        .controller("ModalInstanceCtrl", ["$uibModalInstance",ModalInstanceCtrl]);

})();

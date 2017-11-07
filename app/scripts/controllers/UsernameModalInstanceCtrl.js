(function(){

    function UsernameModalInstanceCtrl($uibModalInstance){
        this.submitUsername = function(username){
            $uibModalInstance.close(username);//sends username result back to modal promise object
        };
    }

    angular
        .module("blocChat")
        .controller("UsernameModalInstanceCtrl", ["$uibModalInstance", UsernameModalInstanceCtrl]);

})();
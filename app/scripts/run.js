(function(){

    function BlocChatCookies($cookies, $uibModal){ //this function will fire when angular app runs (user opens site)
        var currentUser = $cookies.get('blocChatCurrentUser'); //returns the value of this cookie key
        if(!currentUser||currentUser===""){ 
            var modalInstanceObject = $uibModal.open({
                animation: false,
                keyboard: false,
                templateUrl: '/templates/usernameModalInstance.html',
                controller: 'UsernameModalInstanceCtrl',
                controllerAs: 'UsernameModalInstance'
            });

            modalInstanceObject.result.then(function(username){
                $cookies.put("blocChatCurrentUser", username);
            });
        }
    }

    angular
        .module("blocChat")
        .run(["$cookies", "$uibModal", BlocChatCookies]); //on the ngCookies module there is a $cookies service to help us interact with cookies

})();
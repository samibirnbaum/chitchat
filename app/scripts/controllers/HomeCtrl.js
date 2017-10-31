//controller for the home template
(function() {

    function HomeCtrl(Room) {
        this.room = Room; //this injects the room service but also puts it on the scope of this controller so can be accessed in the view
    }

    
    angular
        .module("blocChat")
        .controller("HomeCtrl", ["Room", HomeCtrl]);
})();
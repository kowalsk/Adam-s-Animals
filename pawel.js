if (Meteor.isClient) {

    var previousNr; // used in 'click' function to prevent the same picture showing again
    
    Template.hello.helpers({
    counter: function () {    }    
  });

  Template.hello.events({
    'click': function () {
        var myPix = new Array("lion.jpg", "tiger.jpg", "bear.jpg");
        
        var randomNr = Math.floor((Math.random() * myPix.length));
        while (previousNr == randomNr) {
            var randomNr = Math.floor((Math.random() * myPix.length));
        }
        document.getElementById("myPicture").src = myPix[randomNr];
        previousNr = randomNr;
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

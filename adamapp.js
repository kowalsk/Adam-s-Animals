if (Meteor.isClient) {

    var previousNr; // used in 'click' function to prevent the same picture showing again
    
    Template.hello.helpers({
    counter: function () {    }    
  });

  Template.hello.events({
    'click': function () {
        var myPix = new Array("bear", "bee", "cat", "cow", "dog", "duck",
                              "elephant", "fox", "goat", "hippo", "lion",
                              "monkey", "mosquito", "mouse", "owl", "parrot",
                              "pig", "polar-bear", "rabbit", "squirrel", "tiger");
        
        var randomNr = Math.floor((Math.random() * myPix.length));
        while (previousNr == randomNr) {
            var randomNr = Math.floor((Math.random() * myPix.length));
        }
        document.getElementById("myPicture").src = ((myPix[randomNr])+".jpg");
        previousNr = randomNr;
        
        var soundFile = ((myPix[randomNr])+".mp3")
        
        var sound = new Howl({
            urls: [soundFile]
        }).play();


    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
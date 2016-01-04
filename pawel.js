if (Meteor.isClient) {
    Template.hello.helpers({
    counter: function () {
      return 88;
    }    
  });

  Template.hello.events({
    'click': function () {
        var myPix = new Array("lion.jpg", "tiger.jpg", "bear.jpg");
        
        var randomNr = ;
        console.log("PK: Image clicked", randomNr);

        document.getElementById("myPicture").src = myPix[Math.floor((Math.random() * myPix.length))];
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

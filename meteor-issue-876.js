Tests = new Meteor.Collection("tests");

if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome. There are " + Tests.find().count() + " tests.";
  };

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

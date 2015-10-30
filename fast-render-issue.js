if (Meteor.isServer) {
  Meteor.publish('test', function() {
    this.ready();
  });

  FastRender.onAllRoutes(function() {
    this.subscribe('test');
  });
}

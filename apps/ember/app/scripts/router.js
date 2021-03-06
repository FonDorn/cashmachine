Ember.Router.map(function () {

  this.resource('cards', function() {
    this.resource('card', { path: '/:card_id' }, function() {
      this.route('operations');
      this.route('balance');
    });
  });

  this.resource('sessions', function() {
    this.route('new');
  });

});

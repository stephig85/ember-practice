import Ember from 'ember';

export default Ember.Route.extend({
  // This sets the path to show the "rentals.hbs" upon loading the index.  It replaces '/' with '/rentals'
  beforeModel() {
  this.replaceWith('rentals');
}
});

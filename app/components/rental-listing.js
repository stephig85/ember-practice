import Ember from 'ember';

// allows an image to be expanded when clicked on (toggleProperty() toggles 'isWide' to TRUE when user clicks on 'view larger')
export default Ember.Component.extend({
  isWide: false,
  actions: {
    toggleImageSize() {
      this.toggleProperty('isWide');
    }
}
});

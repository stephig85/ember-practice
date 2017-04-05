import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-filter'],
  value: '',

  init() {
    this._super(...arguments);
    this.get('filter')('').then((results) => this.set('results', results));
  },

  actions: {
    handleFilterEntry() {
      let filterInputValue = this.get('value');
      let filterAction = this.get('filter');
      filterAction(filterInputValue).then((filterResults) => this.set('results', filterResults));
    }
  }
});

/* NOTES: https://guides.emberjs.com/v2.12.0/tutorial/autocomplete-component/
- The init hook seeds the initial listings by calling the filter action with an empty value.
- The handleFilterEntry action calls a function called filter based on the value attribute set by the input helper.
*/

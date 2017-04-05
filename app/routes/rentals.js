import Ember from 'ember';

export default Ember.Route.extend({
  model() {
// call the findAll function on the store and provide it with the name of your newly created rental model class.
// When we call findAll, Ember Data will attempt to fetch rentals from /api/rentals. If you recall, in the section titled Installing Addons we set up an adapter to route data requests through /api.
// Since we have already set up Ember Mirage in our development environment, Mirage will return the data we requested without actually making a network request.
// When we deploy our app to a production server, we will likely want to replace Mirage with a remote server for Ember Data to communicate with for storing and retrieving persisted data. A remote server will allow for data to be shared and updated across users.

    return this.get('store').findAll('rental');
   }
 });

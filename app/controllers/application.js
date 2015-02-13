import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    showMore: function() {
      alert('application:showMore');
    },
    foo: function() {
      alert('application:foo');
    },
    blubb: function() {
      alert('application:blubb');
    }
  }
});

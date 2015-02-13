import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showMore: function() {
      alert('component-b:showMore');
      this.sendAction('foo');
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showMore: function() {
      alert('component-a:showMore');
    },
    foo: function() {
      alert('component-a:foo');
    },
    bar: function() {
      alert('component-a:bar');
      this.sendAction('baz');
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    clearRm() {
      this.set('lift.repMax', undefined);
    }
  }
});

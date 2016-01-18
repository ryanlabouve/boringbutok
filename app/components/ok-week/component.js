import Ember from 'ember';

export default Ember.Component.extend({
  squat: Ember.computed('lift', function() {
    return this.get('lifts').findBy('name', 'squat');
  }),
  deadlift: Ember.computed('lift', function() {
    return this.get('lifts').findBy('name', 'deadlift');
  }),
  bench: Ember.computed('lift', function() {
    return this.get('lifts').findBy('name', 'bench');
  })
});
